export default function Button({ isOpenButton, onClick }) {
  return (
    <button className="btn-toggle" onClick={onClick}>
      {isOpenButton ? "–" : "+"}
    </button>
  );
}
