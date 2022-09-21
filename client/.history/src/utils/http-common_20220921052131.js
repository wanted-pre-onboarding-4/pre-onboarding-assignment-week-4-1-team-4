import axios from 'axios';
import authStore from '../store/AuthStore';

const instance = axios.create({
  baseURL: '',
  timeout: 1000
});

instance.interceptors.request.use(
  config => {
    const { token } = authStore();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  err => {
    window.alert(err)
  }
);

export default instance