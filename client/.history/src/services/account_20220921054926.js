import instance from '../utils/http-common';

export const getAccounts = () => {
  return instance.get('/accounts');
};
