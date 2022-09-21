import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { useAuth } from '../../contexts/AuthProvider';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const {onLogin} = useAuth()

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
      <h1 className="text-5xl font-extrabold text-blue-900 mb-8">PREFACE</h1>
      <div className="border-solid border-[1px] rounded-md shadow-md shadow-gray-300 w-1/2">
        <div className="flex items-center justify-start space-x-2 p-4 font-medium text-xl bg-gray-100">
          <BsPerson />
          <h2>로그인</h2>
        </div>
        <form onSubmit={loginHandler} className="flex flex-col gap-y-8 p-4">
          <label className="flex items-center space-x-2 border-solid border-[1px] p-2 rounded">
            <BsPerson />
            <input
              type="email"
              value={enteredEmail}
              onChange={changeEmail}
              placeholder="이메일을 입력하세요"
              className="outline-none p-1"
            />
          </label>
          <label className="flex items-center space-x-2 border-solid border-[1px] p-2 rounded">
            <AiOutlineLock />
            <input
              type="password"
              autoComplete="off"
              value={enteredPassword}
              onChange={changePassword}
              placeholder="비밀번호를 입력하세요"
              className="outline-none p-1"
            />
          </label>
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
