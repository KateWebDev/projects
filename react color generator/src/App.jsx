import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  function addColor(color) {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <section className="container">
      <ToastContainer position="bottom-right" />
      <h2>Color Generator Starter</h2>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </section>
  );
};
export default App;
