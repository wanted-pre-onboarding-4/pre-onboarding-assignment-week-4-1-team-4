import React from 'react';
import Account from './components/Account';

const AccountList = () => {
  return (
    <div>
      <ul>
        {[1, 2, 3, 4, 5].map(item => (
          <Account />
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
