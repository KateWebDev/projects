import { useState } from "react";
import Button from "./Button";

export default function AddForm({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson");

  return (
    <>
      <form
        className="form-add-friend"
        onSubmit={(evt) => {
          evt.preventDefault();
          addFriend({ id: Date.now(), name, image, balance: 0 });
          setName("");
          setImage("");
        }}
      >
        <label htmlFor="name">🧑‍🤝‍🧑 Friend name</label>
        <input id="name" name="name" type="text" value={name} onChange={(evt) => setName(evt.target.value)} />

        <label htmlFor="image">📸 Image URL</label>
        <input id="image" name="image" type="text" value={image} onChange={(evt) => setImage(evt.target.value)} />

        <Button type="submit">Add</Button>
      </form>
    </>
  );
}
