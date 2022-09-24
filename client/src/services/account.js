import http from '../utils/http-common';

export const getAccounts = url => {
  console.log(url);
  return http.get(`/accounts${url}`);
};
export const getUserAccounts = id => {
  return http.get(`/accounts?user_id=${id}`);
};

export const getUserSetting = () => {
  return http.get(`/userSetting`);
};

export const getUsers = () => {
  return http.get(`/users`);
};

export const getUser = userId => {
  return http.get(`/users/${userId}`);
};

export const getUserByURL = url => {
  console.log(url);
  return http.get(`/users${url}`);
};
