import React, { useEffect, useState } from 'react';
import { getAccounts } from '../../services/account';

import Account from './components/Account';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const getAccountList = async () => {
      const res = await getAccounts(1, 20);
      setAccounts(res.data);
    };
    getAccountList();
  }, []);

  return (
    <div className='px-4 py-8 w-screen bg-gray-100'>
    <table className="bg-gray-200 w-full border-solid border-[1px] flex gap-x-6">
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
      <Account accounts={accounts}/>
    </table>
    </div>

  );
};

export default AccountList;
