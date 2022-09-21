import http from '../utils/http-common';

export const getAccounts = () => {
  return http.get('/accounts');
};
