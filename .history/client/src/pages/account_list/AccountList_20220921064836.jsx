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
    <table className="bg-gray-100 w-full overflow-x-scroll">
      <thead className="flex w-full px-2 py-4">
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
      </thead>
      {accounts.map(account => (
        <tbody className="flex justify-between">
          <tr className="justify-self-center">
            <td>증권사</td>
          </tr>
          <tr className="justify-self-center">
            <td>계좌번호</td>
          </tr>
          <tr className="justify-self-center">
            <td>고객명</td>
          </tr>
          <tr className="justify-self-center">
            <td>운용상태</td>
          </tr>
          <tr className="justify-self-center">
            <td>{account.name}</td>
          </tr>
          <tr className="justify-self-center">
            <td>평가금액</td>
          </tr>
          <tr className="justify-self-center">
            <td>입금금액</td>
          </tr>
          <tr className="justify-self-center">
            <td>수익률</td>
          </tr>
          <tr className="justify-self-center">
            <td>계좌활성화</td>
          </tr>
          <tr className="justify-self-center">
            <td>{account.created_at}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default AccountList;
