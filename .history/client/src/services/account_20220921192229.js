import http from '../utils/http-common';

export const getAccounts = (page,limit,search) => {
  return http.get(`/accounts?_page=${page}&_limit=${limit}?q=${search}`);
};

export const getUser = (userId) => {
  return http.get(`/users/${userId}`)
}