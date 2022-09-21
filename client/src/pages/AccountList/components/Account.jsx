import React from 'react';
import { useQuery } from 'react-query';
import api from '../../../services/api';
import { broker } from '../../../services/data';
import { cls } from '../../../utils/cls';
import { getAccountStatus } from '../../../utils/getAccountStatus';
import { getBrokerAccount } from '../../../utils/getBrokerAccount';

const Account = ({ account }) => {
  const { data: userData } = useQuery(
    `/users/${account.user_id}`,
    api.getUserInfo(account.user_id)
  );
  console.log('userData', account);
  return (
    <div className="relative border-2 w-[50vw] p-6 rounded-3xl ">
      <h1 className="border-b-2 pb-3 flex justify-between">
        <span>{broker[account.broker_id]}</span>
        <span>{account.name}</span>
      </h1>
      <div className="flex  pt-6 justify-between">
        <div className="w-1/2">
          <div className="border-b-2 p-1 space-y-3">
            <div className="w-full flex justify-between">
              계좌번호
              <span className="font-bold">
                {getBrokerAccount(account.broker_id, account.number)}
              </span>
            </div>
            <div className="text-end">
              <span>
                <span className="font-bold">{userData?.data.name}</span> 님
              </span>
            </div>
          </div>
          <div className=" pt-8">
            <div>
              계좌개설일: <span>{account.created_at.split('T')[0]}</span>
            </div>
            <div>
              계좌 상태: <span>{getAccountStatus(account.status)}</span>
            </div>
            <div className="flex items-center">
              계좌 활성화 여부:{' '}
              <div
                className={cls(
                  'w-3 h-3 ml-2 rounded-full',
                  !account.is_active ? 'bg-red-600' : 'bg-green-600'
                )}
              ></div>
            </div>
          </div>
        </div>
        <div className="space-y-2 w-1/2 ml-10 mt-20">
          <div className="text-end">
            평가 금액: <span>{Number(account.assets).toLocaleString('en')} $</span>
          </div>
          <div className="text-end">
            입금 금액: <span>{Number(account.payments).toLocaleString('en')} $</span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 rounded-l-3xl left-0 h-full bg-slate-300 w-24 -z-10"></div>
    </div>
  );
};

export default Account;
