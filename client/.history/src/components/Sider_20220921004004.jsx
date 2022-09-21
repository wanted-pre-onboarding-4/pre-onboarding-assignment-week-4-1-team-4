import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineAccountBalance, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdAnalytics, IoMdLogOut } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Sider = () => {
  return (
    <div className="w-max bg-blue-900">
      <h1 className="text-3xl font-extrabold text-white p-4">PREFACE</h1>
      <ul>
        <li>
          <NavLink to="/" className="flex items-center space-x-2 text-white">
            <AiOutlineDashboard />
            <span>대시보드</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="flex items-center space-x-2 text-white">
            <div className='flex'>
              <MdOutlineAccountBalance /> <span>계좌 목록</span>
            </div>
            <div>
              <MdKeyboardArrowDown />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="flex items-center space-x-2 text-white">
            <BsPerson /> <span>사용자</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="flex items-center space-x-2 text-white">
            <IoMdLogOut /> <span>로그아웃</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sider;
