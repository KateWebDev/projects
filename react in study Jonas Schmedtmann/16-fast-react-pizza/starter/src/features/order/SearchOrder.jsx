import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        if (!value) return;
        navigate(`/order/${value}`);
        setValue("");
      }}
    >
      <input type="text" placeholder="Search Order" value={value} onChange={(evt) => setValue(evt.target.value)} />
    </form>
  );
}
