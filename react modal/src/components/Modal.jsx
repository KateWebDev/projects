export default function Modal({ title, content, children }) {
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h2 className="modalHeader">{title}</h2>
      <div className="modalBody">{content}</div>
      <div className="modalFooter">{children}</div>
    </div>
  );
}
