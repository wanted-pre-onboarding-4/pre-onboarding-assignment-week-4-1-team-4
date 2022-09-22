import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="w-[85vw] backdrop-blur-sm grid grid-cols-2 ml-48 px-12 py-5 items-center fixed top-0 ">
      <h1 className="text-2xl font-bold text-slate-700">투자계좌</h1>
      <div className="flex justify-self-end items-center">
        <h5 className="mr-5">{user.email}</h5>
      </div>
    </header>
  );
};

export default Header;
