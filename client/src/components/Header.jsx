import React from 'react';

const Header = () => {
  return (
    <header className="w-[85vw] backdrop-blur-sm grid grid-cols-2 ml-48 px-12 py-5 items-center fixed top-0 ">
      <h1 className="text-2xl font-bold text-slate-700">투자계좌</h1>
      <h5 className="justify-self-end ">김명원님</h5>
    </header>
  );
};

export default Header;
