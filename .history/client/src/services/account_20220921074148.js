import http from '../utils/http-common';

export const getAccounts = (page,limit) => {
  return http.get(`/accounts?_page=${page}&_limit=${limit}`);
};

export const getUser = (userId) => {
  return http.get(`/users/${userId}`)
}