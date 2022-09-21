import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

const api = {
  login: async ({ email, password }) => await instance.post('/login', { email, password }),
};

export default api;
