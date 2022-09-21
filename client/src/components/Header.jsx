import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getUser } from '../services/account';
import authStore from '../store/AuthStore';

const Header = () => {
  const [userProfile, setUserProfil] = useState([]);

  const { id } = authStore();
  const { pathname } = useLocation();

  useEffect(() => {
    const getUserProfile = async () => {
      const res = await getUser(id);
      setUserProfil(res.data);
    };
    getUserProfile();
  }, [id]);

  return (
    <header className="flex justify-between bg-white py-6 px-4 border-b-[1px]">
      <div>
        {pathname === '/users' && '유저 목록 페이지'}
        {/\/(users)\/[\d]+/g.exec(pathname) && '유저 상세 페이지'}
        {pathname === '/accounts' && '계좌 목록 페이지'}
        {/\/(accounts)\/[\d]+/g.exec(pathname) && '계좌 상세 페이지'}
      </div>
      <div className="flex space-x-4">
        <p>{!userProfile.name ? '미지정' : userProfile.name}</p>
        <img src={userProfile?.photo} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
