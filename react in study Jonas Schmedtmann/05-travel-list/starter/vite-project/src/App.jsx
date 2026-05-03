import { useEffect, useState } from "react";

export default function App() {
  const [list, setList] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ]);
  const [order, setOrder] = useState("input");

  const packedTrue = list.filter((item) => item.packed);

  function replaceStatus(id) {
    return setList(list.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }

  function delItem(id) {
    return setList(list.filter((item) => item.id !== id));
  }

  function delAll() {
    return setList([]);
  }

  function sort(order) {
    if (order === "description") {
      return list.sort((a, b) => a.description.localeCompare(b.description));
    }
  }

  return (
    <div className="app">
      <Header />
      <Form setList={setList} />
      <TravelList
        list={list}
        replaceStatus={replaceStatus}
        delItem={delItem}
        delAll={delAll}
        order={order}
        setOrder={setOrder}
      />
      <Stats packedTrue={packedTrue} list={list} />
    </div>
  );
}
function Header() {
  return (
    <header>
      <h1>🌴 Far Away ⛱️</h1>
    </header>
  );
}

function Form({ setList }) {
  const [num, setNum] = useState(1);
  const [text, setText] = useState("");
  return (
    <form
      className="add-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        text.trim().length > 0 &&
          setList((prev) => [...prev, { id: Date.now(), description: text, quantity: num, packed: false }]);
        setNum(1);
        setText("");
      }}
    >
      <h3>What do yoy need for your trip?</h3>
      <select name="num" id="num" value={num} onChange={(evt) => setNum(Number(evt.target.value))}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={text}
        onChange={(evt) => {
          setText(evt.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TravelList({ list, replaceStatus, delItem, delAll, order, setOrder }) {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <TravelPoint key={item.id} replaceStatus={replaceStatus} delItem={delItem} {...item} />
        ))}
      </ul>
      <div className="actions">
        <select name="sort" id="sort" value={order} onChange={(evt) => setOrder(evt.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description </option>
          <option value="status">sort by packed status </option>
        </select>
        <button type="button" onClick={delAll}>
          clear list
        </button>
      </div>
    </div>
  );
}

function TravelPoint({ id, description, quantity, packed, replaceStatus, delItem }) {
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

function Stats({ packedTrue, list }) {
  return (
    <div className="stats">
      <p>
        You have {list.length} items on your list, and you already packed {packedTrue.length} (
        {Math.round((100 * packedTrue.length) / (list.length || 1))}%)
      </p>
    </div>
  );
}
