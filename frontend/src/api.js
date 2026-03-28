const API_URL = "/api";

export const getTasks = async () => {
  const res = await fetch(`${API_URL}/tasks/`);
  return res.json();
};

export const createTask = async (formData) => {
  return fetch(`${API_URL}/tasks/`, {
    method: "POST",
    body: formData,
  });
};

export const updateTask = async (id, formData) => {
  return fetch(`${API_URL}/tasks/${id}/`, {
    method: "PUT",
    body: formData,
  });
};

export const deleteTask = async (id) => {
  return fetch(`${API_URL}/tasks/${id}/`, {
    method: "DELETE",
  });
};