import React, { useContext, useCallback } from 'react';
import { UserContext } from '../contexts/user';
import token from '../utils/token';

const Header = () => {
  const { user, setUserInfo } = useContext(UserContext);

  const logOutClick = useCallback(() => {
    setUserInfo({ email: '', id: null });
    token.remove();
  }, []);

  return (
    <header className="w-[85vw] backdrop-blur-sm grid grid-cols-2 ml-48 px-12 py-5 items-center fixed top-0 ">
      <h1 className="text-2xl font-bold text-slate-700">투자계좌</h1>
      <div className="flex justify-self-end items-center">
        <h5 className="mr-5">{user.email}</h5>
        <button
          onClick={logOutClick}
          className="rounded-sm bg-slate-500 text-white py-2 px-2 active:scale-95"
        >
          LogOut
        </button>
      </div>
    </header>
  );
};

export default Header;
