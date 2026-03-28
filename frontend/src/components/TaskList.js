// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api";

export default function TaskList({ onEdit }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>

          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}