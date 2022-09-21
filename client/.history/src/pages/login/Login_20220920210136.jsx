import React from 'react';
import { BsPerson } from 'react-icons/bs';
import {AiOutlineLock} from "react-icons/ai"
const Login = () => {
  return (
    <div>
      <div className='flex space-x-2 items-center'>
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
