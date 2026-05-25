export default function Options({ question, dispath, answer }) {
  const isResponseAnswer = answer !== null;

  return (
    <ul className="options">
      {question.options.map((item, index) => (
        <li key={index}>
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${isResponseAnswer ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
            onClick={() => {
              dispath({ type: "addAnswer", payload: { answer: index } });
            }}
            disabled={isResponseAnswer}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
