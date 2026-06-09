import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  function activeQuestion(id) {
    const newId = id === activeQuestionId ? null : id;
    setActiveQuestionId(newId);
  }

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>;
        <ul>
          {questions.map((question, index) => (
            <SingleQuestion
              key={question.id}
              {...question}
              activeQuestion={activeQuestion}
              activeQuestionId={activeQuestionId}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};
export default App;
