import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';
import { getAccounts } from '../../services/account';
import { useSearchParams, useLocation } from 'react-router-dom';
import brokers from '../../data/brokers.json';
import Account from './components/Account';
import Select from '../../components/Select';
import accountStatus from '../../data/accountStatus.json';
const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const location = useLocation();
  const query = useSearchParams();
  console.log(query);
  console.log(location.search);
  useEffect(() => {
    const getAccountList = async () => {
      const res = await getAccounts(location.search);
      setAccounts(res.data);
    };
    getAccountList();
  }, []);

  return (
    <>
      <div className="px-4 py-8 w-screen bg-gray-100 min-w-[1600px] ">
        <div className="flex items-center gap-x-10 mb-4">
          <div className="space-x-2">
            <Select name="증권사" options={brokers} />
            <Select name="계좌 활성화" options={{ true: '활성화', false: '비활성화' }} />
            <Select name="계좌 상태" options={accountStatus} />
          </div>
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
