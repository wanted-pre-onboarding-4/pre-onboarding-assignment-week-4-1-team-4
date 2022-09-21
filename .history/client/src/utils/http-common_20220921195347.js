import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 2000
});

instance.interceptors.request.use(
  config => {
    const {state : {token}} = JSON.parse(localStorage.getItem('token'))
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    // error 헨들링 필요
    console.log(err)
    window.alert(err)
  }
);

export default instance