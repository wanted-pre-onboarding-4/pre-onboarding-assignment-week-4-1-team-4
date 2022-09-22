import React, { useState } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineAccountBalance, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdAnalytics, IoMdLogOut } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import authStore from '../store/AuthStore';
import { useLocation, useParams } from 'react-router-dom/dist';
// import { useAuth } from '../contexts/AuthProvider';
const Sider = () => {
  const [openSubCategory, setOpenSubCategory] = useState(false);

  const { onLogout } = authStore();

  const { pathname } = useLocation();
  const { account_id } = useParams();

  return (
    <div className="w-52 h-screen  fixed left-0 bottom-0 bg-neutral-800 border-t-4 border-blue-600">
      <h1 className="text-3xl font-extrabold text-center text-white px-5 py-4 pr-7">PREFACE</h1>
      <ul>
        <li className="flex items-center px-8 space-x-2 py-4 text-gray-300  hover:text-white ease-in duration-100">
          <AiOutlineDashboard />
          <span>대시보드</span>
        </li>
        <li
          onMouseOver={() => setOpenSubCategory(true)}
          onMouseLeave={() => setOpenSubCategory(false)}
          onClick={() => setOpenSubCategory(false)}
        >
          <NavLink
            to="/accounts"
            end
            className="flex items-center px-8 space-x-2 py-4 text-gray-300 justify-between cursor-pointer hover:text-white ease-in duration-100 "
          >
            <div className="flex items-center justify-center space-x-2">
              <MdOutlineAccountBalance />
              <span>계좌 목록</span>
            </div>
            <div>
              {openSubCategory ? (
                <MdKeyboardArrowUp className="fill-gray-300 text-xl" />
              ) : (
                <MdKeyboardArrowDown className="fill-gray-300 text-xl" />
              )}
            </div>
          </NavLink>
          {(pathname === `/accounts/${account_id}` || openSubCategory) && (
            <NavLink
              to="/accounts/:id"
              className="flex items-center px-10 space-x-2 py-3 text-gray-300 hover:text-white ease-in duration-100 "
              onClick={() => setOpenSubCategory(true)}
            >
              <IoMdAnalytics />
              <span>투자 계좌</span>
            </NavLink>
          )}
        </li>

        <li>
          <NavLink
            to="/users"
            className="flex items-center px-8 space-x-2 py-4 text-gray-300  hover:text-white ease-in duration-100"
          >
            <BsPerson />
            <span>사용자</span>
          </NavLink>
        </li>
      </ul>
      <button
        onClick={onLogout}
        className="flex items-center px-8 space-x-2 py-4 text-gray-300  hover:text-white ease-linear duration-200"
      >
        <IoMdLogOut />
        <span>로그아웃</span>
      </button>
    </div>
  );
};

export default Sider;
