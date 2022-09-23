import React, { useState } from 'react';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import authStore from '../store/AuthStore';

const Sider = () => {
  const [, setOpenSubCategory] = useState(false);

  const { onLogout } = authStore();

  const onClickLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      return onLogout();
    } else return;
  };

  return (
    <div className="w-52 h-screen  fixed left-0 bottom-0 bg-neutral-800 border-t-4 border-blue-600">
      <h1 className="text-3xl font-extrabold text-center text-white px-5 py-4 pr-7">PREFACE</h1>
      <ul className="mt-7">
        <li
          onMouseOver={() => setOpenSubCategory(true)}
          onMouseLeave={() => setOpenSubCategory(false)}
          onClick={() => setOpenSubCategory(false)}
        >
          <NavLink
            to={'/accounts?_page=1&_limit=10'}
            end
            className="flex items-center px-8 space-x-2 py-4 text-gray-300 justify-between cursor-pointer hover:text-white ease-in duration-100 "
          >
            <div className="flex items-center justify-center space-x-2">
              <MdOutlineAccountBalance />
              <span>계좌 목록</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/users?_page=1&_limit=10`}
            className="flex items-center px-6 space-x-2 py-4 text-gray-300"
          >
            <BsPerson />
            <span>사용자</span>
          </NavLink>
        </li>
      </ul>
      <button
        onClick={onClickLogout}
        className="flex items-center px-8 space-x-2 py-4 text-gray-300  hover:text-white ease-linear duration-200"
      >
        <IoMdLogOut />
        <span>로그아웃</span>
      </button>
    </div>
  );
};

export default Sider;
