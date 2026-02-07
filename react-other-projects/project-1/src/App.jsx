import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState({
    openForm: true,
    openTasks: false,
    openCompletedTasks: false,
  });

  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks], { ...task, completed: false, id: Date.now() });
  }

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
        {isOpen.openForm && <TaskForm addTask={addTask} />}
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

function TaskForm({ addTask }) {
  const [titleTask, setTitlteTask] = useState("");
  const [priorityTask, setPriorityTask] = useState("");
  const [deadlineTask, setDeadlineTask] = useState("");

  function sendTask(evt) {
    evt.preventDefault();
    if (titleTask && deadlineTask) {
      titleTask.trim();
      addTask({ titleTask, priorityTask, deadlineTask });
      setTitlteTask("");
      setPriorityTask("");
      setDeadlineTask("");
    }
  }

  return (
    <form className="task-form" action="#" onSubmit={sendTask}>
      <input
        type="text"
        value={titleTask}
        placeholder="Task title"
        required
        onChange={(evt) => setTitlteTask(evt.target.value)}
      />
      <select value={priorityTask} onChange={(evt) => setPriorityTask(evt.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="datetime-local"
        value={deadlineTask}
        required
        onChange={(evt) => setDeadlineTask(evt.target.value)}
      />
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
