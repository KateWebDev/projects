import { useState } from "react";

export default function TravelPoint({ id, description, quantity, packed, replaceStatus, delItem }) {
  const [isChecked, setIsChecked] = useState(packed);
  return (
    <ul>
      {
        <li>
          <input
            name="checked"
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked((prev) => !prev);
              replaceStatus(id);
            }}
          />
          <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
            <strong>{quantity} </strong>
            {description}
          </p>
          <button type="button" onClick={() => delItem(id)}>
            ❌
          </button>
        </li>
      }
    </ul>
  );
}
