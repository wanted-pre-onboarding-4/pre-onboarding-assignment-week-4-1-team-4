import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '../services/account';
import authStore from '../store/AuthStore';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Header = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfil] = useState([]);

  const { id } = authStore();
  const { pathname } = useLocation();

  const unsplashimg = {
    src: 'https://source.unsplash.com/34x34/?face',
    alt: 'random unsplash image',
  };

  useEffect(() => {
    const getUserProfile = async () => {
      const res = await getUser(id);
      setUserProfil(res.data);
    };
    getUserProfile();
  }, [id]);

  const goToPrev = () => {
    navigate(-1);
  };

  return (
    <header className="flex justify-between content-center bg-white py-4 px-6 border-b-[1px]  ">
      <div className="flex text-xl content-center font-semibold ">
        <AiOutlineArrowLeft
          className="self-center  mr-3 cursor-pointer text-neutral-400 hover:text-blue-800 ease-in duration-100"
          onClick={goToPrev}
        />
        <span className="self-center">{pathname === '/users' && '유저 목록 페이지'}</span>
        <span className="self-center">
          {' '}
          {/\/(users)\/[\d]+/g.exec(pathname) && '유저 상세 페이지'}
        </span>
        <span className="self-center">{pathname === '/accounts' && '계좌 목록 페이지'}</span>
        <span className="self-center">
          {/\/(accounts)\/[\d]+/g.exec(pathname) && '계좌 상세 페이지'}
        </span>
      </div>
      <div className="flex space-x-4">
        <p className="mt-1">{!userProfile.email ? '미지정' : userProfile.email}</p>
        <img src={unsplashimg.src} alt={unsplashimg.alt} className="rounded-full self-center" />
      </div>
    </header>
  );
};

export default Header;
