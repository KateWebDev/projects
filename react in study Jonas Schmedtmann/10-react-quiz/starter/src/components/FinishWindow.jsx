export default function FinishWindow({ points, allPoints, maxPoints, dispath }) {
  let emoji = "";
  let percent = Math.floor((points / allPoints) * 100);

  if (percent === 100) emoji = "👑";
  if (percent >= 80 && percent < 100) emoji = "😍";
  if (percent >= 60 && percent < 80) emoji = "😊";
  if (percent >= 40 && percent < 60) emoji = "😮";
  if (percent >= 20 && percent < 40) emoji = "😭";
  if (percent < 20) emoji = "🤬";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} out of {allPoints} ({percent}%)
      </p>
      <p className="highscore">Highscore: {maxPoints} points</p>
      <button className="btn btn-ui" onClick={() => dispath({ type: "restartQuiz" })}>
        Restart Quiz
      </button>
    </>
  );
}
