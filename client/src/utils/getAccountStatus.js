import { accountStatus } from '../services/data';

export const getAccountStatus = status => {
  return Object.keys(accountStatus).find(key => accountStatus[key] === status);
};
