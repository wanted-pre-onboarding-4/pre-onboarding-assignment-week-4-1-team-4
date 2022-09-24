import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';

import authStore from '../../store/AuthStore';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const { onLogin } = authStore();

  const changeEmail = e => {
    setEnteredEmail(e.target.value);
  };
  const changePassword = e => {
    setEnteredPassword(e.target.value);
  };

  const loginHandler = e => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
    setEnteredEmail('');
    setEnteredPassword('');
  };

  let formValid = false;

  if (enteredEmail.includes('@') && enteredPassword.length >= 4) formValid = true;

  return (
    <section className="flex flex-col justify-center items-center w-full gap-y-6">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-3">PREFACE</h1>
      <div className="border-solid border-[1px] rounded-md shadow-sm shadow-gray-300 w-1/3">
        <div className="flex justify-start items-center space-x-2 p-4 pl-8 font-medium text-xl bg-gray-100">
          <BsPerson />
          <h2>로그인</h2>
        </div>
        <form onSubmit={loginHandler} className="flex flex-col gap-y-4 p-6 pt-4">
          <div className="mb-4">
            <label className="flex items-center block text-gray-700 text-sm font-bold mb-2"></label>
            <AiOutlineMail className="mr-2 absolute mt-3.5 ml-3.5 text-lg" />
            <input
              type="text"
              value={enteredEmail}
              onChange={changeEmail}
              placeholder="이메일을 입력하세요"
              className="mt-1 block w-full px-10 py-3  bg-white  border-solid border-[1px]  rounded text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-blue-500 focus:ring-1"
            />

            <label className="flex items-center block text-gray-700 text-sm font-bold mb-2"></label>
            <AiOutlineLock className="mr-2 absolute mt-3.5 ml-3.5 text-lg " />
            <input
              type="password"
              autoComplete="off"
              value={enteredPassword}
              onChange={changePassword}
              placeholder="비밀번호를 입력하세요"
              className="mt-1 block w-full px-10 py-3 bg-white  border-solid border-[1px]  rounded text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-blue-500 focus:ring-1"
            />
          </div>

          <button
            className="flex items-center justify-center space-x-2 w-full text-lg border-solid border-[1px] p-2 rounded text-white bg-blue-900 duration-200 disabled:text-gray-400 disabled:bg-gray-100"
            disabled={!formValid}
          >
            <BiLogIn />
            <span>로그인</span>
          </button>
        </form>
      </div>
      <p className="text-xs">Copyright © December and Company Inc.</p>
    </section>
  );
};

export default Login;
