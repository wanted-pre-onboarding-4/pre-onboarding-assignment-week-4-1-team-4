import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 1000
});

instance.interceptors.request.use(
  config => {
    const token = "asdas"
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    console.log(config)
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