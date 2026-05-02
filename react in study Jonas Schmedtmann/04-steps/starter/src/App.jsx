import { useState } from "react";

export default function App() {
  const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

  const [num, setNum] = useState(0);

  return (
    <section className="steps">
      <ul className="numbers">
        {messages.map((_, index) => (
          <li key={index} className={`${index <= num ? "active" : ""}`}>
            {index + 1}
          </li>
        ))}
      </ul>
      <p className="message">
        Step {num + 1}: {messages[num]}
      </p>
      <div className="buttons">
        <button
          type="button"
          style={{
            color: num === 0 ? "#000" : "#fff",
            background: num === 0 ? "#eee" : "#7950f2",
            pointerEvents: num === 0 ? "none" : "visible ",
          }}
          onClick={() => setNum((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          Prev
        </button>
        <button
          type="button"
          style={{
            color: num === messages.length - 1 ? "#000" : "#fff",
            background: num === 2 ? "#eee" : "#7950f2",
            pointerEvents: num === 2 ? "none" : "visible ",
          }}
          onClick={() => setNum((prev) => (prev < messages.length - 1 ? prev + 1 : prev))}
        >
          Next
        </button>
      </div>
    </section>
  );
}
