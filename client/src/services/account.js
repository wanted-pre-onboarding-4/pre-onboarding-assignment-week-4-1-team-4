import http from '../utils/http-common';

export const getAccounts = url => {
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

export const getAccountById = userId => {
  return http.get(`/accounts/${userId}`);
};

export const getUserByURL = url => {
  return http.get(`/users${url}`);
};

export const putUser = (userId, config) => {
  return http.put(`/users/${userId}`, config);
};

export const deleteUser = userId => {
  return http.delete(`/users/${userId}`);
};
