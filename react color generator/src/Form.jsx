import { useState } from "react";

export default function Form({ addColor }) {
  const [color, setColor] = useState("#f15025");

  return (
    <>
      <form
        className="form"
        onSubmit={(evt) => {
          evt.preventDefault();
          addColor(color);
        }}
      >
        <input className="form-input" type="color" value={color} onChange={(evt) => setColor(evt.target.value)} />
        <button type="submit" style={{ background: color }}>
          generate
        </button>
      </form>
    </>
  );
}
