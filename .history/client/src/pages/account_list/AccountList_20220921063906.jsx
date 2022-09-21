import React, { useEffect, useState } from 'react';
import { getAccounts } from '../../services/account';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getAccountList = async () => {
      const res = await getAccounts(2, 20);
      setAccounts(res.data);
    };
    getAccountList();
  }, []);

  return (
    <div className="bg-gray-100 w-full overflow-x-scroll">
      <table className="flex w-full px-2 py-4">
        <tr className="grid grid-flow-row grid-cols-10 justify-between ">
          <th className="justify-self-center">증권사</th>
          <th className="justify-self-center">계좌번호</th>
          <th className="justify-self-center">고객명</th>
          <th className="justify-self-center">운용상태</th>
          <th className="justify-self-center">계좌명</th>
          <th className="justify-self-center">평가금액</th>
          <th className="justify-self-center">입금금액</th>
          <th className="justify-self-center">수익률</th>
          <th className="justify-self-center">계좌활성화</th>
          <th className="justify-self-center">계좌개설일</th>
        </tr>
        {accounts.map(account => (
            <div className='flex justify-between'>
              <div className="justify-self-center">증권사</div>
              <div className="justify-self-center">계좌번호</div>
              <div className="justify-self-center">고객명</div>
              <div className="justify-self-center">운용상태</div>
              <div className="justify-self-center">{account.name}</div>
              <div className="justify-self-center">평가금액</div>
              <div className="justify-self-center">입금금액</div>
              <div className="justify-self-center">수익률</div>
              <div className="justify-self-center">계좌활성화</div>
              <div className="justify-self-center">{account.created_at}</div>
            </div>
          ))}
      </table>
    </div>
  );
};

export default AccountList;
