import Item from "./Item";

export default function List({ data, friend, setFriend, setAddForm }) {
  return (
    <ul>
      {data.map((friends) => (
        <Item friends={friends} key={friends.id} friend={friend} setFriend={setFriend} setAddForm={setAddForm} />
      ))}
    </ul>
  );
}
