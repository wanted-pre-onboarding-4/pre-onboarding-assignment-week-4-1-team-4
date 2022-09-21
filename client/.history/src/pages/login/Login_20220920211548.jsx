import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';

const Login = () => {
  return (
    <div>
      <div className=''>
        <div className="flex items-center justify-start space-x-2 p-2 font-medium text-xl bg-gray-100">
          <BsPerson />
          <h1>로그인</h1>
        </div>
        <form className='p-2'>
          <label className="flex items-center space-x-2 border-solid border-[1px] p-2">
            <BsPerson />
            <input type="email" placeholder="이메일을 입력하세요" />
          </label>
          <label className="flex items-center space-x-2 border-solid border-[1px] p-2">
            <AiOutlineLock />
            <input type="password" placeholder="비밀번호를 입력하세요" />
          </label>
          <button
            className="flex items-center justify-center space-x-2 w-full text-lg border-solid border-[1px] p-2 disabled:text-gray-400 disabled:bg-gray-100"
            disabled={true}
          >
            <BiLogIn />
            <span>로그인</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
