import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 1000
});

instance.interceptors.request.use(
  config => {
    const {state : {token}} = JSON.parse(localStorage.getItem('token'))
    if (token) {
      config.defaults.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    const {state : {token}} = JSON.parse(localStorage.getItem('token'))
    if (token) {
      instance.defaults.headers.Authorization = 'Bearer ' + token
    }
    return res;
  },
  err => {
    window.alert(err)
  }
);

export default instance