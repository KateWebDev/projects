export default function Progress({ currentIndex, countQuestions, points, allPoints, answer }) {
  return (
    <div className="progress">
      <progress value={answer !== null ? currentIndex + 1 : currentIndex} max={countQuestions}></progress>
      <p>
        Question <strong>{currentIndex + 1}</strong>/{countQuestions}
      </p>
      <p>
        {points}/{allPoints} points
      </p>
    </div>
  );
}
