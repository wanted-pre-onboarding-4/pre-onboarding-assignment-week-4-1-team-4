import axios from 'axios';
import authStore from '../store/AuthStore';

const instance = axios.create({
  baseURL: '',
  timeout: 2000
});

const {onLogout} =authStore()

instance.interceptors.request.use(
  config => {
    const {state : {token}} = JSON.parse(localStorage.getItem('token'))
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
    return res;
  },
  error => {
    if(error.response.status === 401){
      window.alert("세션 만료")
      onLogout()
      return
    }
    // error 헨들링 필요
    window.alert(error)
  }
);

export default instance