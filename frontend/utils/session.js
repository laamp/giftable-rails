import axios from 'axios';

export const signUp = user => axios.post('/api/users', { user });

export const logIn = user => axios.post('/api/session', { user });

export const logOut = () => axios.delete('/api/session');
