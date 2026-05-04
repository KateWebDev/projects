import { useState } from "react";

export default function Form({ setList }) {
  const [num, setNum] = useState(1);
  const [text, setText] = useState("");
  return (
    <form
      className="add-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        text.trim().length > 0 &&
          setList((prev) => [...prev, { id: Date.now(), description: text, quantity: num, packed: false }]);
        setNum(1);
        setText("");
      }}
    >
      <h3>What do yoy need for your trip?</h3>
      <select name="num" id="num" value={num} onChange={(evt) => setNum(Number(evt.target.value))}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={text}
        onChange={(evt) => {
          setText(evt.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
