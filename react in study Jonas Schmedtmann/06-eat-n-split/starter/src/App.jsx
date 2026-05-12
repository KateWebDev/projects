import { useState } from "react";
import { initialFriends as data } from "./Data";
import List from "./List";
import Button from "./Button";
import AddForm from "./AddForm";
import FormSplitBill from "./FormSplitBill";

export default function App() {
  const [friends, setFriends] = useState(data);
  const [addForm, setAddForm] = useState(false);
  const [friend, setFriend] = useState(null);

  function addFriend(friend) {
    if (friend.name.trim().length === 0 || friend.image.trim().length === 0) {
      alert("Enter name or image");
      return;
    }

    if (friend.name.trim().length > 0 && friend.image.trim().length > 0) {
      setFriends((prev) => [...prev, friend]);
      setAddForm(false);
    }
  }

  function editBalance(id, balance) {
    setFriends(friends.map((item) => (item.id === id ? { ...item, balance } : item)));
    setFriend(null);
  }

  return (
    <div className="app">
      {/* <div className="sidebar">
        <List data={friends} friend={friend} setFriend={setFriend} setAddForm={setAddForm} />
        {addForm && <AddForm addFriend={addFriend} />}
        <Button onClick={() => setAddForm((prev) => !prev)}>{addForm ? "Close" : "Add friend"}</Button>
      </div>
      {friend && <FormSplitBill friend={friend} editBalance={editBalance} key={friend.id} />} */}

      <header
        onClick={() => console.log("this is header")}
        style={{
          width: "300px",
          height: "200px",
          background: "red",
        }}
      >
        <div className="logo" onClick={() => console.log("this is parent logo")}>
          <a href="#">click me</a>
        </div>
      </header>
    </div>
  );
}
