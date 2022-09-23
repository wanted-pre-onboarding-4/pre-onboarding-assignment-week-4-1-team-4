import http from '../utils/http-common';

export const getAccounts = url => {
  return http.get(`/accounts${url}`);
};

export const getUser = userId => {
  return http.get(`/users/${userId}`);
};

export const getUsers = () => {
  return http.get(`/users`);
};

export const getUserSetting = () => {
  return http.get(`/userSetting`);
};
