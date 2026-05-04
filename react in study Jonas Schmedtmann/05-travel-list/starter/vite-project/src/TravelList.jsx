import { useState } from "react";
import TravelPoint from "./TravelPoint";

export default function TravelList({ list, replaceStatus, delItem, delAll }) {
  const [order, setOrder] = useState("input");
  let sortList;

  if (order === "input") {
    sortList = list;
  }
  if (order === "description") {
    sortList = list.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  if (order === "status") {
    sortList = list.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortList.map((item) => (
          <TravelPoint key={item.id} replaceStatus={replaceStatus} delItem={delItem} {...item} />
        ))}
      </ul>
      <div className="actions">
        <select name="sort" id="sort" value={order} onChange={(evt) => setOrder(evt.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="status">sort by packed status </option>
        </select>
        <button type="button" onClick={delAll}>
          clear list
        </button>
      </div>
    </div>
  );
}
