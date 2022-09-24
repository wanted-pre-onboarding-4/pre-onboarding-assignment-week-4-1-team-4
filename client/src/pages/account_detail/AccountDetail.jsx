import React, { useEffect, useState } from 'react';
import { getAccountById, getUser } from '../../services/account';
import { useLocation } from 'react-router-dom';
import accountStatus from '../../data/accountStatus.json';
import brokerFormat from '../../data/brokerFormat.json';
import brokers from '../../data/brokers.json';

function AccountDetail() {
  const location = useLocation();
  const id = location.pathname.split('/').at(-1);
  const [account, setAccount] = useState({});
  const [user, setUser] = useState({});
  const create_date = new Date(account.created_at);
  const update_date = new Date(account.updated_at);

  const accountBrokerFormat = (accountNumber, brokerId) => {
    if (brokerId === undefined) {
      return '';
    }
    const format = brokerFormat[brokerId];
    let resultAccount = '';
    let j = 0;
    for (let i = 0; i < format.length; i++) {
      if (format[i] === '0') {
        resultAccount += accountNumber[j];
        j += 1;
      } else if (format[i] === '-') {
        resultAccount += '-';
      }
    }
    return resultAccount;
  };

  useEffect(() => {
    const getAccountDetail = async () => {
      const resAccount = await getAccountById(id);
      const resUser = await getUser(resAccount.data.user_id);
      setAccount(resAccount.data);
      setUser(resUser.data);
    };
    getAccountDetail();
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-5/6">
      <table>
        <tbody className="h-5/6 w-full border-2">
          <tr className="h-20">
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              이름
            </td>
            <td className="w-60 border-b-2 border-r-2 text-center text-2xl">{`${user.name}`}</td>
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              계좌 이름
            </td>
            <td className="w-60 border-b-2 text-center text-2xl">{`${account.name}`}</td>
          </tr>
          <tr className="h-20">
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              증권사
            </td>
            <td className="w-60 border-b-2 border-r-2 text-center text-2xl">{`${
              brokers[account.broker_id]
            }`}</td>
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              계좌 상태
            </td>
            <td className="w-60 border-b-2 text-center text-2xl">
              {accountStatus[account.status]}
            </td>
          </tr>
          <tr className="h-20">
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              계좌 번호
            </td>
            <td className="w-60 border-b-2 border-r-2 text-center text-2xl">{`${accountBrokerFormat(
              account.number,
              account.broker_id
            )}`}</td>
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              자산
            </td>
            <td className="w-60 border-b-2 text-center text-2xl">{`${account.assets}`}</td>
          </tr>
          <tr className="h-20">
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              지출 금액
            </td>
            <td className="w-60 border-b-2 border-r-2 text-center text-2xl">{`${account.payments}`}</td>
            <td className="w-60 border-b-2 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              계좌 활성화 여부
            </td>
            <td className="w-60 border-b-2 text-center text-2xl">{`${
              account.is_active ? '활성화' : '비활성화'
            }`}</td>
          </tr>
          <tr className="h-20">
            <td className="w-60 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              계좌 생성일
            </td>
            <td className="w-60 border-r-2 text-center text-2xl">{`${create_date.getFullYear()}년 ${
              create_date.getMonth() + 1
            }월 ${create_date.getDate()}일`}</td>
            <td className="w-60 border-r-2 text-center bg-yellow-100 font-bold text-2xl">
              최신 갱신일
            </td>
            <td className="w-60 text-center text-2xl">{`${update_date.getFullYear()}년 ${
              update_date.getMonth() + 1
            }월 ${update_date.getDate()}일`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountDetail;
