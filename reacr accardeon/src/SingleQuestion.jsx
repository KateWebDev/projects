export default function SingleQuestion({ id, title, info, activeQuestion, activeQuestionId }) {
  return (
    <li className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => activeQuestion(id)}>
          {activeQuestionId === id ? "-" : "+"}
        </button>
      </header>
      {activeQuestionId === id && <p>{info}</p>}
    </li>
  );
}
