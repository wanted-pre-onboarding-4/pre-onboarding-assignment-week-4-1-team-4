import React from 'react';
import { BsPerson } from 'react-icons/bs';
import {AiOutlineLock} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"

const Login = () => {
  return (
    <div>
      <div className='flex items-center justify-start space-x-2 p-2 font-semibold text-xl bg-gray-100'>
        <BsPerson />
        <h1  >로그인</h1>
      </div>
      <form>
        <label className='flex items-center space-x-2 border-solid border-[1px] p-2'>
          <BsPerson />
          <input type="email" placeholder="이메일을 입력하세요" />
        </label>
        <label className='flex items-center space-x-2 border-solid border-[1px] p-2'>
          <AiOutlineLock />
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </label>
        <button className='flex items-center space-x-2 border-solid border-[1px] p-2'><BiLogIn/><span>로그인</span></button>
      </form>
    </div>
  );
};

export default Login;
