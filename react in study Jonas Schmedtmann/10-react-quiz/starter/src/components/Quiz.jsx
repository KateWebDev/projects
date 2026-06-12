import { useContextQuiz } from "../hooks/useContextQuiz";

export default function Quiz() {
  const { countQuestions, dispath } = useContextQuiz();
  return (
    <>
      <div className="start">
        <h2>Welcome to The React Quiz</h2>
        <h3>{countQuestions} questions to test your React mastery</h3>
        <button
          className="btn btn-ui"
          type="button"
          onClick={() => {
            dispath({ type: "active" });
          }}
        >
          Let's start !
        </button>
      </div>
    </>
  );
}
