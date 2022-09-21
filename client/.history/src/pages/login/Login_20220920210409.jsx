import React from 'react';
import { BsPerson } from 'react-icons/bs';
import {AiOutlineLock} from "react-icons/ai"
const Login = () => {
  return (
    <div>
      <div className='flex items-center justify-start space-x-2 p-2 font-semibold Class
Properties
text-xs	font-size: 0.75rem; /* 12px */
line-height: 1rem; /* 16px */
text-sm	font-size: 0.875rem; /* 14px */
line-height: 1.25rem; /* 20px */
text-base	font-size: 1rem; /* 16px */
line-height: 1.5rem; /* 24px */
text-lg	font-size: 1.125rem; /* 18px */
line-height: 1.75rem; /* 28px */
text-xl	font-size: 1.25rem; /* 20px */
line-height: 1.75rem; /* 28px */
text-2xl bg-gray-100'>
        <BsPerson />
        <h1  >로그인</h1>
      </div>
      <form>
        <label className='flex-col'>
          <BsPerson className='text-red-800'/>
          <input type="email" placeholder="이메일을 입력하세요" />
        </label>
        <label>
          <AiOutlineLock />
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </label>
      </form>
    </div>
  );
};

export default Login;
