// src/api.js

const API_URL = "http://localhost:8000/api";

export const getTasks = async () => {
  const res = await fetch(`${API_URL}/tasks/`);
  return res.json();
};

export const createTask = async (task) => {
  return fetch(`${API_URL}/tasks/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
};

export const updateTask = async (id, task) => {
  return fetch(`${API_URL}/tasks/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
};

export const deleteTask = async (id) => {
  return fetch(`${API_URL}/tasks/${id}/`, {
    method: "DELETE",
  });
};