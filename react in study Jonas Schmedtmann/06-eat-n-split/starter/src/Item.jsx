import Button from "./Button";

export default function Item({ friends, friend, setFriend, setAddForm }) {
  const { id, name, image, balance } = friends;
  return (
    <li className={friend?.id === id ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={balance === 0 ? "" : balance > 0 ? "green" : "red"}>
        {balance === 0
          ? `You and ${name} are even`
          : balance > 0
            ? `${name} owes you ${balance}$`
            : `You owe ${name} ${Math.abs(balance)}$`}
      </p>
      <Button
        onClick={() => {
          setAddForm(false);
          setFriend((prev) => (prev?.id === id ? null : { id, name, image, balance }));
        }}
      >
        {friend?.id === id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
