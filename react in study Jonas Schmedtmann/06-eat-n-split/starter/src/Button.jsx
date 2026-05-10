export default function Button({ type = "button", children, onClick }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
