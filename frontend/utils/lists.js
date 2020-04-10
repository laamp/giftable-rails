import axios from 'axios';

export const getAllLists = id => axios.get(`/api/users/${id}/lists`);
