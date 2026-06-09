import Button from "./Button";

export default function Main({ openModal, showCloseButton, children }) {
  return (
    <>
      <h1 className="title">Universal Modal Component</h1>
      <Button className="button" openModal={openModal}>
        Open Modal
      </Button>

      {showCloseButton && (
        <div className="overlay" onClick={openModal}>
          {children}
        </div>
      )}
    </>
  );
}
