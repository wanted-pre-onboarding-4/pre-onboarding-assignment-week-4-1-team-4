import React from 'react';
import Account from './components/Account';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import api from '../../services/api';
import Page from '../../components/Page';

const AccountList = () => {
  const { search } = useLocation();
  const { data } = useQuery('accounts' + search, api.getAccounts(search));

  return (
    <div>
      <ul>
        {data?.data.map(item => (
          <Account account={item} key={item.id} />
        ))}
      </ul>
      <Page length={20} curNumber={search.split('&').map(string => +string.split('=')[1])[0]} />
    </div>
  );
};

export default AccountList;
