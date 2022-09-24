import { useParams } from 'react-router-dom';
import { getUser, getAccounts, getUserSetting } from '../../services/account';
import UserInfo from './components/UserInfo';
import UserAccountList from './components/UserAccountList';
import { useQuery } from 'react-query';
import { BiEditAlt } from 'react-icons/bi';
import { useState } from 'react';
import Modal from './components/Modal';
import UpdateUser from './components/UpdateUser';

export default function User() {
  const { user_id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const { data: userInfo } = useQuery(
    ['userInfo', user_id],
    async () => {
      const res = await getUser(user_id);
      return res.data;
    },
    {
      staleTime: 180000,
      cacheTime: 180000,
      enabled: !!user_id,
      onError: res => {
        console.error(res);
      },
    }
  );

  const { data: userAccounts } = useQuery(
    ['userAccounts', user_id],
    async () => {
      const res = await getAccounts('');
      return res.data.filter(account => account.user_id === Number(user_id));
    },
    {
      staleTime: 180000,
      cacheTime: 180000,
      enabled: !!user_id,
      onError: res => {
        console.error(res);
      },
    }
  );

  const { data: userSettingInfo } = useQuery(
    ['userSettingInfo', userInfo],
    async () => {
      const res = await getUserSetting();
      const settings = res.data.filter(setting => setting.uuid === userInfo?.uuid)[0];
      return {
        allow_invest_push: settings?.allow_invest_push,
        allow_marketing_push: settings?.allow_marketing_push,
        is_active: settings?.is_active,
        is_staff: settings?.is_staff,
      };
    },
    {
      staleTime: 180000,
      cacheTime: 180000,
      enabled: !!user_id,
      onError: res => {
        console.error(res);
      },
    }
  );

  return (
    <>
      {isModalOpen && (
        <Modal>
          <UpdateUser userInfo={userInfo} toggleModal={toggleModal} />
        </Modal>
      )}
      <div className="flex flex-col items-center w-full bg-slate-100 p-10">
        <section className="flex flex-col w-full mb-10">
          <h1 className="flex items-center text-2xl font-semibold mb-5">
            <div className="mr-3">사용자 정보</div>
            <BiEditAlt onClick={toggleModal} />
          </h1>
          <UserInfo userData={{ ...userInfo, ...userSettingInfo }} />
        </section>
        <section className="flex flex-col w-full">
          <h1 className="text-2xl font-semibold mb-5">사용자 계좌 목록</h1>
          <UserAccountList userAccounts={userAccounts} />
        </section>
      </div>
    </>
  );
}
