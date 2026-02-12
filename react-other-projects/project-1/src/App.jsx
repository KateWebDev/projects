import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState({
    form: true,
    list: true,
    completed: true,
  });

  function showSection(sectionName) {
    setIsOpen((prevCondition) => ({ ...prevCondition, [sectionName]: !prevCondition[sectionName] }));
  }

  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  function completedTask(id) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true, date: Date.now() } : task)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id != id));
  }

  const [sortType, setSortType] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  function reverseTypeSort(typeSort) {
    if (sortType === typeSort) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType(typeSort);
      setSortOrder("asc");
    }
  }

  function sortTask(tasks) {
    return tasks.slice().sort((a, b) => {
      if (sortType === "priority") {
        const priority = { low: 1, medium: 2, high: 3 };
        return sortOrder === "asc"
          ? priority[a.priority] - priority[b.priority]
          : priority[b.priority] - priority[a.priority];
      } else {
        return sortOrder === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      }
    });
  }

  const activeTasks = sortTask(tasks.filter((item) => !item.completed));
  const completedTasks = sortTask(tasks.filter((item) => item.completed));

  return (
    <div className="app">
      <div className="task-container">
        <h1>Создание задачи</h1>
        {isOpen.form && <FormTask addTask={addTask} />}
        <ButtonClose isOpen={isOpen} showSection={showSection} sectionName="form" />
      </div>
      <div className="task-container">
        <h2>Активные задачи</h2>
        <div className="sort-controls">
          <button className="sort-button" onClick={() => reverseTypeSort("date")}>
            По дате {sortType === "date" ? (sortOrder === "asc" ? "\u2191" : "\u2193") : ""}
          </button>
          <button className="sort-button" onClick={() => reverseTypeSort("priority")}>
            По приоритету {sortType === "priority" ? (sortOrder === "asc" ? "\u2191" : "\u2193") : ""}
          </button>
        </div>
        {isOpen.list && activeTasks.length > 0 && (
          <TaksList activeTasks={activeTasks} completedTask={completedTask} deleteTask={deleteTask} />
        )}
        <ButtonClose isOpen={isOpen} showSection={showSection} sectionName="list" />
      </div>
      <div className="completed-task-container">
        <h2>Выполненные задачи</h2>
        {isOpen.completed && completedTasks.length > 0 && (
          <TaksListCompleted completedTasks={completedTasks} completedTask={completedTask} deleteTask={deleteTask} />
        )}
        <ButtonClose isOpen={isOpen} showSection={showSection} sectionName="completed" />
      </div>
    </div>
  );
}

function FormTask({ addTask }) {
  const [title, setTitle] = new useState("");
  const [priority, setPriority] = new useState("low");
  const [date, setDate] = new useState("");

  function sendTask() {
    addTask({ title, priority, date });
    setTitle("");
    setPriority("low");
    setDate("");
  }

  return (
    <form action="#" className="task-form" onSubmit={sendTask}>
      <label htmlFor="nameTask">Введите название задачи</label>
      <input
        id="nameTask"
        type="text"
        value={title}
        placeholder="Название задачи"
        required
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <label htmlFor="priorityTask">Выберите приоритет задачи</label>
      <select id="priorityTask" value={priority} onChange={(evt) => setPriority(evt.target.value)}>
        <option value="low">не срочная</option>
        <option value="medium">срочная</option>
        <option value="high">очень срочная</option>
      </select>
      <label htmlFor="dateTask">Выберите время выполнения задачи</label>
      <input id="dateTask" type="datetime-local" value={date} required onChange={(evt) => setDate(evt.target.value)} />
      <button type="submit">Добавить задачу</button>
    </form>
  );
}

function TaksList({ activeTasks, completedTask, deleteTask }) {
  return (
    <ol className="task-list">
      {activeTasks.map((task) => {
        return <TaskItem task={task} completedTask={completedTask} deleteTask={deleteTask} key={task.id} />;
      })}
    </ol>
  );
}

function TaksListCompleted({ completedTasks, completedTask, deleteTask }) {
  return (
    <ol className="task-list">
      {completedTasks.map((task) => {
        return <TaskItem task={task} completedTask={completedTask} deleteTask={deleteTask} key={task.id} />;
      })}
    </ol>
  );
}

function TaskItem({ task, completedTask, deleteTask }) {
  return (
    <li className={`task-item ${task.priority} ${task.completed ? "completed" : ""}`}>
      <div>
        <p className="task-info">{task.title}</p>
        <p className="task-deadline">{new Date(task.date).toLocaleString()}</p>
      </div>
      <div className="task-buttons">
        {!task.completed && (
          <button className="complete-button" onClick={() => completedTask(task.id)}>
            Выполнено
          </button>
        )}
        <button className="delete-button" onClick={() => deleteTask(task.id)}>
          Удалить
        </button>
      </div>
    </li>
  );
}

function ButtonClose({ isOpen, showSection, sectionName }) {
  return (
    <button className={`close-button ${isOpen[sectionName] ? "open" : ""}`} onClick={() => showSection(sectionName)}>
      +
    </button>
  );
}
export default App;
