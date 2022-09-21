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
    <section className="h-screen max-h-full fixed left-0 bottom-0">
      <div className="w-52  bg-blue-900 ">
        <h1 className="text-3xl font-extrabold text-center text-white px-6 py-4">PREFACE</h1>
        <ul>
          <li className="flex items-center px-6 space-x-2 py-4 text-gray-300">
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
              className="flex items-center px-6 space-x-2 py-4 text-gray-300 justify-between cursor-pointer"
            >
              <div className="flex items-center justify-center space-x-2">
                <MdOutlineAccountBalance />
                <span>계좌 목록</span>
              </div>
              <div>
                {openSubCategory ? (
                  <MdKeyboardArrowUp className="fill-gray-300" />
                ) : (
                  <MdKeyboardArrowDown className="fill-gray-300" />
                )}
              </div>
            </NavLink>
            {(pathname === `/accounts/${account_id}` || openSubCategory) && (
              <NavLink
                to="/accounts/:id"
                className="flex items-center justify-center px-6 space-x-2 py-4 text-gray-300"
                onClick={() => setOpenSubCategory(true)}
              >
                <IoMdAnalytics />
                <span>투자 계좌</span>
              </NavLink>
            )}
          </li>

          <li>
            <NavLink to="/users" className="flex items-center px-6 space-x-2 py-4 text-gray-300">
              <BsPerson />
              <span>사용자</span>
            </NavLink>
          </li>
        </ul>
        <button onClick={onLogout} className="flex items-center px-6 space-x-2 py-4 text-gray-300">
          <IoMdLogOut />
          <span>로그아웃</span>
        </button>
      </div>
    </section>
  );
};

export default Sider;
