import React from 'react';
import Account from './components/Account';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import api from '../../services/api';
import Page from '../../components/Page';
import Controller from './components/Controller';

const AccountList = () => {
  const { search } = useLocation();
  console.log(search);
  const { data } = useQuery('accounts' + search, api.getAccounts(search));

  return (
    <div className="border-2 relative">
      <ul className=" flex flex-col items-start space-y-5">
        {data?.data.map(item => (
          <Account account={item} key={item.id} />
        ))}
      </ul>
      <Controller />
      <Page length={20} curNumber={search.split('&').map(string => +string.split('=')[1])[0]} />
    </div>
  );
};

export default AccountList;
