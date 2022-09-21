import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Search from '../../components/Search';
import { getAccounts } from '../../services/account';

import Account from './components/Account';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const {search} = useLocation()
  const {q} = queryString.parse(search)
  console.log(q)

  useEffect(() => {
    const getAccountList = async () => {
      const res = await getAccounts(1, 20);
      setAccounts(res.data);
    };
    getAccountList();
  }, [q]);

  return (
    <>
      <div className="px-4 py-8 w-screen bg-gray-100">
        <div className='flex items-center gap-x-10 mb-4'>
          <select></select>
          <Search />
        </div>
        <table className="bg-gray-200 w-full border-solid border-[1px]">
          <thead className="flex w-full px-2 py-4 ">
            <tr className="flex justify-between w-full">
              <th className="justify-center flex flex-1">증권사</th>
              <th className="justify-center flex flex-1">계좌번호</th>
              <th className="justify-center flex flex-1">고객명</th>
              <th className="justify-center flex flex-1">운용상태</th>
              <th className="justify-center flex flex-1">계좌명</th>
              <th className="justify-center flex flex-1">평가금액</th>
              <th className="justify-center flex flex-1">입금금액</th>
              <th className="justify-center flex flex-1">수익률</th>
              <th className="justify-center flex flex-1">계좌활성화</th>
              <th className="justify-center flex flex-1">계좌개설일</th>
            </tr>
          </thead>
          {accounts.map(account => (
            <Account key={account.uuid} account={account} />
          ))}
        </table>
      </div>
    </>
  );
};

export default AccountList;
