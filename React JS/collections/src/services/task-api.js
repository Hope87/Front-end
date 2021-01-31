import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchTasks = async () => {
  const response = await axios.get(`/tasks`);
  const tasks = response.data;

  return tasks;
};

export const postTask = async task => {
  const response = await axios.post(`/tasks`, task);
  const createdTask = response.data;

  return createdTask;
};

export const deleteTask = async id => {
  const deletedTask = await axios.delete(`/tasks/${id}`);

  return deletedTask;
};

export const updateTask = async (id, update) => {
  const response = await axios.patch(`/tasks/${id}`, update);
  const updatedTask = response.data;

  return updatedTask;
};
