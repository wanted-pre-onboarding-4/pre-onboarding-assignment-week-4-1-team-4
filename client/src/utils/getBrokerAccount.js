import { brokerFormat } from '../services/data';

export const getBrokerAccount = (key, account) => {
  const accountNumber = brokerFormat[key].split('').map(char => (char === '0' ? '*' : char));
  let pointer = 0;
  for (let i = 0; i < accountNumber.length; i++) {
    if (accountNumber[i] === '-') continue;
    accountNumber[i] = account[pointer];
    pointer++;
    if (pointer === 2) break;
  }

  pointer = account.length - 1;
  for (let i = accountNumber.length - 1; i >= 0; i++) {
    if (accountNumber[i] === '-') continue;
    accountNumber[i] = account[pointer];
    pointer--;
    if (pointer === account.length - 3) break;
  }

  return accountNumber.join('');
};
