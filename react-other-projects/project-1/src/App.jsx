import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState({
    openForm: false,
    openTasks: true,
    openCompletedTasks: false,
  });

  function showSection(sectionName) {
    setIsOpen((prevStatus) => ({
      ...prevStatus,
      [sectionName]: !prevStatus[sectionName],
    }));
  }

  return (
    <div className="app">
      ----------------------------------------------------------------------
      <div className="task-container">
        <h1>Task List with Priority</h1>
        {isOpen.openForm && <TaskForm />}
        <ButtonClose open={isOpen} functionName={showSection} sectionName="openForm" />
      </div>
      ----------------------------------------------------------------------
      <div className="task-container">
        <h2>Tasks</h2>
        <div className="sort-controls">
          <button className="sort-button">By Date</button>
          <button className="sort-button">By Proirity</button>
        </div>
        {isOpen.openTasks && <TaskList />}
        <ButtonClose open={isOpen} functionName={showSection} sectionName="openTasks" />
      </div>
      ----------------------------------------------------------------------
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        {isOpen.openCompletedTasks && <TaskCompleted />}
        <ButtonClose open={isOpen} functionName={showSection} sectionName="openCompletedTasks" />
      </div>
      ----------------------------------------------------------------------
      <Footer />
    </div>
  );
}

function TaskForm() {
  return (
    <form className="task-form" action="#">
      <input type="text" value={""} placeholder="Task title" required />
      <select value={""}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="datetime-local" value={""} required />
      <button type="submit">Add Task</button>
    </form>
  );
}

function TaskList() {
  return <Tasks />;
}

function TaskCompleted() {
  return <TasksComplited />;
}

function Tasks() {
  return (
    <ul className="task-list">
      <Task />
    </ul>
  );
}

function TasksComplited() {
  return (
    <ul className="completed-task-list">
      <Task />
    </ul>
  );
}

function Task() {
  return (
    <li className="task-item">
      <div className="task-info">
        <div>
          #1 Task - <strong>Low</strong>
        </div>
        <div className="task-deadline">Due: {new Date().toLocaleString()}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button" type="button">
          Complete
        </button>
        <button className="delete-button" type="button">
          Delete
        </button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quas delectus eveniet quae illum praesentium
        et sapiente aut tempore similique.
      </p>
    </footer>
  );
}

function ButtonClose({ open, sectionName, functionName }) {
  return (
    <button
      className={`close-button ${open[sectionName] ? "open" : ""}`}
      type="button"
      onClick={() => functionName(sectionName)}
    >
      +
    </button>
  );
}

export default App;
