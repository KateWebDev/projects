import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateUserName } from "./userSlice";
import Button from "../../components/Button";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateUserName(username));
    navigate("/menu");
  }

  return (
    <form className="flex flex-col items-center text-center gap-y-3 md:gap-y-4" onSubmit={(e) => handleSubmit(e)}>
      <p className="mb-2 text-sm sm:text-base">👋 Welcome! Please start by telling us your name:</p>

      <input
        className="p-2 border-b-1 w-72 input focus-element trans"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="submit">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
