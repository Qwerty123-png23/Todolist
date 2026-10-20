import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() - "") return;

    setTasks([...tasks, { text: task, isActive: false }]);
    setTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));

  }
  function toggleActive(index) {
    setTasks(
      tasks.map((item, i) =>
        i === index
          ? { ...item, isActive: !item.isActive }
          : item));
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <div>
        <input
          type="text"
          placeholder='Введите задач'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={` ${item.isActive ? "active" : ""}`}>
            {item.text}
            <button onClick={() => deleteTask(index)}>Удалить</button>
            <button onClick={() => toggleActive(index)}>Сделано</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
