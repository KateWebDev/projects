import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import TravelList from "./TravelList";
import Stats from "./Stats";

export default function App() {
  const [list, setList] = useState([]);

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

  return (
    <div className="app">
      <Header />
      <Form setList={setList} />
      <TravelList list={list} replaceStatus={replaceStatus} delItem={delItem} delAll={delAll} />
      <Stats packedTrue={packedTrue} list={list} />
    </div>
  );
}
