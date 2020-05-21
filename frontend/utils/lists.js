import axios from 'axios';

export const getAllLists = (id) => axios.get(`/api/users/${id}/lists`);

export const createList = (id, list) =>
  axios.post(`/api/users/${id}/lists`, { list });
