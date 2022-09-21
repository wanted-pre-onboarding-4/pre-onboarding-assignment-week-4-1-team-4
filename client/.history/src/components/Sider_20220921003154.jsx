import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
// import {MdOutlineAccountBalance} from "react-icons/md"
import { IoAnalytics } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { IoMdLogOut } from 'react-icons/lo';
const Sider = () => {
  return (
    <div className="w-max bg-blue-900">
      <h1 className="text-3xl font-extrabold text-white p-4">PREFACE</h1>
      <ul>
        <li>
          <AiOutlineDashboard />
          <span>대시보드</span>
        </li>
        <li>
          <IoAnalytics /> <span>계좌 목록</span>
        </li>
        <li>
          <BsPerson /> <span>사용자</span>
        </li>
        <li>
          <IoMdLogOut /> <span>로그아웃</span>
        </li>
      </ul>
    </div>
  );
};

export default Sider;
