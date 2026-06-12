import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Quiz from "./components/Quiz";
import Question from "./components/Question";
import FinishWindow from "./components/FinishWindow";

const TIME = 30; // кол-во секунд на ответ для 1 вопроса

function reducer(prevState, action) {
  switch (action.type) {
    case "data":
      return { ...prevState, status: "ready", data: action.payload.data };
    case "error":
      return { ...prevState, status: "error" };
    case "active":
      return { ...prevState, status: "active", timer: prevState.data.length * TIME };
    case "nextQuestion":
      return {
        ...prevState,
        currentIndex:
          prevState.currentIndex < prevState.data.length - 1 ? prevState.currentIndex + 1 : prevState.currentIndex,
        answer: null,
      };
    case "addAnswer":
      const question = prevState.data.at(prevState.currentIndex);
      return {
        ...prevState,
        answer: action.payload.answer,
        points:
          action.payload.answer === question.correctOption ? prevState.points + question.points : prevState.points,
      };
    case "finishQuiz":
      return {
        ...prevState,
        status: "finished",
        maxPoints: prevState.maxPoints > prevState.points ? prevState.maxPoints : prevState.points,
      };
    case "timer":
      return {
        ...prevState,
        timer: prevState.timer === 0 ? 0 : prevState.timer - 1,
        status: prevState.timer === 0 ? "finished" : prevState.status,
      };

    case "restartQuiz":
      return { ...prevState, status: "ready", currentIndex: 0, points: 0, answer: null, timer: 0 };
    default:
      throw new Error("Action Not Found");
  }
}

export default function App() {
  const initialState = {
    data: [], // вопросы
    status: "loading", // loading, error, ready, active, finished
    currentIndex: 0, // индекс вопроса
    answer: null, // выбранный ответ
    points: 0, // счёт
    maxPoints: localStorage.getItem("maxPoints") ?? 0, //максимально набранный счет
    timer: 0,
  };

  const [{ data, status, currentIndex, answer, points, maxPoints, timer }, dispath] = useReducer(reducer, initialState);

  const countQuestions = data.length;
  const allPoints = data.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:9000/questions");
        if (!response.ok) {
          throw new Error("Error fetch data");
        }
        const data = await response.json();
        dispath({ type: "data", payload: { data } });
      } catch (error) {
        dispath({ type: "error", payload: { error: error.message } });
      }
    }
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("maxPoints", String(maxPoints));
  }, [maxPoints]);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Quiz countQuestions={countQuestions} dispath={dispath} />}
        {status === "active" && (
          <Question
            item={data[currentIndex]}
            currentIndex={currentIndex}
            countQuestions={countQuestions}
            allPoints={allPoints}
            dispath={dispath}
            answer={answer}
            points={points}
            timer={timer}
          />
        )}
        {status === "finished" && (
          <FinishWindow points={points} allPoints={allPoints} maxPoints={maxPoints} dispath={dispath} />
        )}
      </Main>
    </div>
  );
}
