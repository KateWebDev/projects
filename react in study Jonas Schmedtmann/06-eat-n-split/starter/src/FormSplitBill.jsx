import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friend, editBalance }) {
  const [totalMoney, setTotalMoney] = useState("");
  const [myMoney, setMyMoney] = useState("");
  const [payer, setPayer] = useState("user");

  let friendMoney = totalMoney - myMoney || "";
  const friendName = friend.name;

  return (
    <form
      className="form-split-bill"
      onSubmit={(evt) => {
        evt.preventDefault();
        editBalance(friend.id, payer === "user" ? friendMoney * -1 : friendMoney);
        setTotalMoney("");
        setMyMoney("");
        setPayer("user");
      }}
    >
      <h2>Split a bill with {friendName}</h2>

      <label htmlFor="total-money">💰 Bill value</label>
      <input
        id="total-money"
        name="total-money"
        type="number"
        value={totalMoney}
        onChange={(evt) => setTotalMoney(evt.target.value)}
      />

      <label htmlFor="my-money">🧍 Your expense</label>
      <input
        id="my-money"
        name="my-money"
        type="number"
        value={myMoney}
        onChange={(evt) => setMyMoney(evt.target.value)}
      />

      <label htmlFor="friend-money">🧑‍🤝‍🧑 {friendName} expense:</label>
      <input id="friend-money" name="friend-money" type="number" value={friendMoney} disabled />

      <label htmlFor="payer">🤑 Who is paying the bill?</label>
      <select name="payer" id="payer" value={payer} onChange={(evt) => setPayer(evt.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friendName}</option>
      </select>

      <Button type="submit">Split bill</Button>
    </form>
  );
}
