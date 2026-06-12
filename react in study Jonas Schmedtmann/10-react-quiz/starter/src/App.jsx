import { useContextQuiz } from "./hooks/useContextQuiz";

import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Quiz from "./components/Quiz";
import Question from "./components/Question";
import FinishWindow from "./components/FinishWindow";

export default function App() {
  const { status } = useContextQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Quiz />}
        {status === "active" && <Question />}
        {status === "finished" && <FinishWindow />}
      </Main>
    </div>
  );
}
