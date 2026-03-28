// src/App.js
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setSelectedTask(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm selectedTask={selectedTask} onSuccess={handleSuccess} />

      <TaskList key={refresh} onEdit={setSelectedTask} />
    </div>
  );
}

export default App;