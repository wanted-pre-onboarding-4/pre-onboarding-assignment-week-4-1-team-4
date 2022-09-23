import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, getAccounts, getUserSetting } from '../../services/account';
import UserInfo from './components/UserInfo';
import UserAccountList from './components/UserAccountList';

export default function User() {
  const { user_id } = useParams();

  const [accountList, setAccountList] = useState();
  const [user, setUser] = useState({});
  const [userSetting, setUserSetting] = useState({});

  useEffect(() => {
    const getUserDetail = async () => {
      const res = await getUser(user_id);
      setUser(res.data);
    };

    const getAccountList = async () => {
      const res = await getAccounts('');
      const accounts = res.data.filter(account => account.user_id === Number(user_id));
      setAccountList(accounts);
    };

    getUserDetail();
    getAccountList();
  }, [user_id]);

  useEffect(() => {
    const getUserSettingDetail = async () => {
      const res = await getUserSetting();
      const settings = res.data.filter(setting => setting.uuid === user.uuid)[0];
      setUserSetting({
        allow_invest_push: settings?.allow_invest_push,
        allow_marketing_push: settings?.allow_marketing_push,
        is_active: settings?.is_active,
        is_staff: settings?.is_staff,
      });
    };
    getUserSettingDetail();
  }, [user]);

  const userData = {
    ...user,
    ...userSetting,
  };

  return (
    <div className="flex flex-col items-center w-full bg-slate-100 p-10">
      <section className="flex flex-col w-full mb-10">
        <h1 className="text-2xl font-semibold mb-5">사용자 정보</h1>
        <UserInfo userData={userData} />
      </section>
      <section className="flex flex-col w-full">
        <h1 className="text-2xl font-semibold mb-5">사용자 계좌 목록</h1>
        <UserAccountList accountList={accountList} />
      </section>
    </div>
  );
}
