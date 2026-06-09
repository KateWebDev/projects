import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [numParagraph, setNumParagraph] = useState(1);

  console.log(nanoid());

  return (
    <>
      <h2>Lorem Ipsum Starter</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setParagraphs(text.slice(0, numParagraph));
        }}
      >
        <input
          type="number"
          name="num"
          id="num"
          value={numParagraph}
          min={1}
          max={8}
          step={1}
          onChange={(evt) => {
            setNumParagraph(parseInt(evt.target.value, 10));
          }}
        />
        <button type="submit">generate</button>
      </form>

      <div>
        {paragraphs.map((paragraph) => {
          return (
            <>
              <p key={nanoid()}>{paragraph}</p>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};
export default App;
