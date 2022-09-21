import React, { useState } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineAccountBalance, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdAnalytics, IoMdLogOut } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Sider = () => {
  const [openSubCategory, setOpenSubCategory] = useState(false) 

  return (
    <div className="w-52 bg-blue-900">
      <h1 className="text-3xl font-extrabold text-center text-white px-6 py-4">PREFACE</h1>
      <ul>
        <li className="flex items-center px-6 space-x-2 py-4 text-gray-300">
          <AiOutlineDashboard />
          <span>대시보드</span>
        </li>
        <li onMouseOver={setOpenSubCategory(pre=>!pre)}>
          <NavLink
            to="/accounts"
            className="flex items-center justify-between space-x-2 py-4 text-gray-300 px-6"
          >
            <div className="flex items-center space-x-2">
              <MdOutlineAccountBalance /> <span>계좌 목록</span>
            </div>
            <div>
              <MdKeyboardArrowDown className='fill-gray-300'/>
            </div>
          </NavLink>
          {openSubCategory && (
            <li>
              <IoMdAnalytics />
              <span>투자 계좌</span>
            </li>
          )}
        </li>
        <li>
          <NavLink to="/users" className="flex items-center space-x-2 py-4 text-gray-300 px-6">
            <BsPerson /> <span>사용자</span>
          </NavLink>
        </li>
      </ul>
      <button className="flex items-center px-6 space-x-2 py-4 text-gray-300">
        <IoMdLogOut /> <span>로그아웃</span>
      </button>
      <MdKeyboardArrowUp />
      <IoMdAnalytics />
    </div>
  );
};

export default Sider;
