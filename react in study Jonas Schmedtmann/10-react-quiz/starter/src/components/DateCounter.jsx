import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "reset":
      return { count: 0, step: 1 };
    case "addCount":
      return { ...state, count: action.payload.count };
    case "addStep":
      return { ...state, step: action.payload.step };
  }
}

const initialState = {
  count: 0,
  step: 1,
};

function DateCounter() {
  const [state, dispath] = useReducer(reducer, initialState);

  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(evt) => dispath({ type: "addStep", payload: { step: Number(evt.target.value) } })}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => dispath({ type: "dec" })}>-</button>
        <input
          value={count}
          onChange={() => dispath({ type: "addCount", payload: { count: Number(evt.target.value) } })}
        />
        <button onClick={() => dispath({ type: "inc" })}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={() => dispath({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
