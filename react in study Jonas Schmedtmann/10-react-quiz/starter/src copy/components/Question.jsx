import Options from "./Options";
import Progress from "./Progress";
import Timer from "./Timer";

export default function Question({ item, countQuestions, currentIndex, allPoints, dispath, answer, points, timer }) {
  return (
    <div>
      <Progress
        currentIndex={currentIndex}
        countQuestions={countQuestions}
        points={points}
        allPoints={allPoints}
        answer={answer}
      />
      <h4>{item.question}</h4>
      <Options question={item} dispath={dispath} answer={answer} />

      <Timer timer={timer} dispath={dispath} />
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() =>
            currentIndex + 1 === countQuestions ? dispath({ type: "finishQuiz" }) : dispath({ type: "nextQuestion" })
          }
        >
          {currentIndex + 1 !== countQuestions ? "Next" : "Finish"}
        </button>
      )}
    </div>
  );
}
