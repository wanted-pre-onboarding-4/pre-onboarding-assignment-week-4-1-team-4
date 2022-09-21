import axios from 'axios';
import token from '../utils/token';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Authorization: `Bearer ${token.get()}`,
  },
});

const api = {
  login: async ({ email, password }) => await instance.post('/login', { email, password }),
  getAccounts: search => async () => await instance.get(`/accounts${search}`),
  getUserInfo: id => async () => await instance.get(`/users/${id}`),
};

export default api;
