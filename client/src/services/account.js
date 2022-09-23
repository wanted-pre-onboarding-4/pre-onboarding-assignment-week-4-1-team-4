import http from '../utils/http-common';

export const getAccounts = url => {
  console.log(url);
  return http.get(`/accounts${url}`);
};
export const getUserAccounts = id => {
  return http.get(`/accounts?user_id=${id}`);
};

export const getUser = id => {
  return http.get(`/users/${id}`);
};
export const getUserByURL = url => {
  return http.get(`/users${url}`);
};
