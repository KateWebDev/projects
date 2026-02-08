import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState({
    openForm: true,
    openTasks: true,
    openCompletedTasks: true,
  });

  const [tasks, setTasks] = useState([
    { titleTask: "Task1", priorityTask: "low", deadlineTask: new Date().toLocaleString(), completed: false, id: 1 },
    { titleTask: "Task2", priorityTask: "medium", deadlineTask: new Date().toLocaleString(), completed: false, id: 2 },
    { titleTask: "Task3", priorityTask: "high", deadlineTask: new Date().toLocaleString(), completed: false, id: 3 },
    { titleTask: "Task4", priorityTask: "low", deadlineTask: new Date().toLocaleString(), completed: true, id: 4 },
    { titleTask: "Task5", priorityTask: "medium", deadlineTask: new Date().toLocaleString(), completed: true, id: 5 },
    { titleTask: "Task6", priorityTask: "high", deadlineTask: new Date().toLocaleString(), completed: true, id: 6 },
  ]);

  const activeTasks = tasks.filter((task) => !task.completed);

  const completedTasks = tasks.filter((task) => task.completed);

  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: new Date().toLocaleString() }]);
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
        {isOpen.openForm && <TaskForm addTask={addTask} activeTasks={tasks} />}
        <ButtonClose open={isOpen} functionName={showSection} sectionName="openForm" />
      </div>
      ----------------------------------------------------------------------
      <div className="task-container">
        <h2>Tasks</h2>
        <div className="sort-controls">
          <button className="sort-button">By Date</button>
          <button className="sort-button">By Proirity</button>
        </div>
        {isOpen.openTasks && <TaskList activeTasks={activeTasks} />}
        <ButtonClose open={isOpen} functionName={showSection} sectionName="openTasks" />
      </div>
      ----------------------------------------------------------------------
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        {isOpen.openCompletedTasks && <TaskCompleted completedTasks={completedTasks} />}
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

function TaskList({ activeTasks }) {
  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}

function TaskCompleted({ completedTasks }) {
  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}

function Task({ task }) {
  return (
    <li className={`task-item ${task.priorityTask}`}>
      <div className="task-info">
        <div>
          #1 {task.titleTask} - <strong>{task.priorityTask}</strong>
        </div>
        <div className="task-deadline">Due: {task.deadlineTask}</div>
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
