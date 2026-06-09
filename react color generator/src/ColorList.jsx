import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

export default function ColorList({ colors }) {
  return (
    <ul className="colors">
      {colors.map((color, index) => (
        <SingleColor key={nanoid()} color={color} index={index} />
      ))}
    </ul>
  );
}
