// src/components/TaskForm.js
import React, { useState, useEffect } from "react";
import { createTask, updateTask } from "../api";

export default function TaskForm({ selectedTask, onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    }
  }, [selectedTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, description };

    if (selectedTask) {
      await updateTask(selectedTask.id, task);
    } else {
      await createTask(task);
    }

    setTitle("");
    setDescription("");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedTask ? "Edit Task" : "Add Task"}</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}