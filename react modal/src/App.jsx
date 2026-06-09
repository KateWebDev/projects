import { useState } from "react";
import "./index.css";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen((prev) => (prev = !prev));
  }

  function showContent() {
    alert("Ok");
    openModal();
  }

  return (
    <div className="app">
      <Main openModal={openModal} showCloseButton={isModalOpen} showContent={showContent}>
        <Modal
          openModal={openModal}
          showContent={showContent}
          isModalOpen={isModalOpen}
          title="Confirm Your Action"
          content="Are you sure you want to proceed? This action cannot be undone."
        >
          <Button className="closeButton" openModal={openModal}>
            &times;
          </Button>
          <Button className="secondaryButton" openModal={openModal}>
            Cancel
          </Button>
          <Button className="primaryButton" openModal={showContent}>
            Yes, Continue
          </Button>
        </Modal>
      </Main>
    </div>
  );
}

export default App;
