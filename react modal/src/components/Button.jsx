export default function Button({ openModal, children, className }) {
  return (
    <button className={className} onClick={openModal}>
      {children}
    </button>
  );
}
