import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <form
      className="order-3 sm:ml-auto basis-full sm:basis-auto sm:order-2"
      onSubmit={(evt) => {
        evt.preventDefault();
        if (!value) return;
        navigate(`/order/${value}`);
        setValue("");
      }}
    >
      <input
        className="w-full p-2 text-sm bg-yellow-200 rounded-lg trans md:p-3 sm:text-base placeholder:text-stone-500 focus:outline-none focus:ring-3 focus:ring-yellow-400"
        type="text"
        placeholder="Search Order"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </form>
  );
}
