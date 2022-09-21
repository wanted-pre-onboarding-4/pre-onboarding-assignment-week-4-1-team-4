import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import brokers from '../../../data/brokers.json';
import accountStatus from '../../../data/accountStatus.json';
import { getUser } from '../../../services/account';
import { useState } from 'react';

const Account = ({ account }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser(account.user_id);
      setData(data);
    };
    getUserData();
  }, []);

  const rate = ((+account.assets - +account.payments) / (+account.payments * 100))
    .toString()
    .slice(0, 7);

  return (
    <>
      <tbody
        className="flex items-center justify-between w-full bg-white py-2 text-sm"
        key={account.uuid}
      >
        <tr className="justify-center flex flex-1">
          <td>{brokers[account.broker_id]}</td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td>
            {account.number
              .split('')
              .map((char, idx) => (idx > 1 && idx < account.number.length - 2 ? '*' : char))
              .join('')}
          </td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td>
            <Link to={`/users/${account.user_id}`}>{data.data?.name}</Link>
          </td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td>{Object.keys(accountStatus).find(key => accountStatus[key] === account.status)}</td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td>{account.name}</td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td>{(+account.assets).toLocaleString('ko-KR')}</td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td>{(+account.payments).toLocaleString('ko-KR')}</td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td className={rate > 0 ? 'text-red-600' : rate === 0 ? 'text-black' : 'text-blue-600'}>
            {rate}%
          </td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td className={account.is_active ? 'text-blue-600 font-bold' : 'text-red-600 font-bold'}>
            {account.is_active ? '활성화' : '비활성화'}
          </td>
        </tr>
        <tr className="justify-center flex flex-1">
          <td>{account.created_at.slice(0, 10)}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Account;
