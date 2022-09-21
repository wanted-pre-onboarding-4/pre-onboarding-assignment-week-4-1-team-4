import axios from 'axios';
// import { Navigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: '',
  timeout: 2000,
});

instance.interceptors.request.use(
  config => {
    const {
      state: { token },
    } = JSON.parse(localStorage.getItem('token'));
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error.response.status === 401) {
      window.alert('세션 만료');
      localStorage.clear();
      // window.location.href = 'http://localhost:3000/login';
      // Navigate('/login');
      return;
    }
    // error 헨들링 필요
    Promise.reject(error);
  }
);

export default instance;
