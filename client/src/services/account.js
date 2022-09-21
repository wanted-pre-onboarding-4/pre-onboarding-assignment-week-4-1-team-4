import http from '../utils/http-common';

export const getAccounts = url => {
  return http.get(`/accounts${url}`);
};

export const getUser = userId => {
  return http.get(`/users/${userId}`);
};
