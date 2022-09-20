import { React, useEffect, useState } from 'react';
import * as API from '../../utils/api';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonAct, setButtonAct] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await API.post('login', {
        email,
        password,
      });
      const token = res.data.access_token;
      console.log('로그인 성공!');
      localStorage.setItem('userToken', token);
      document.location.href = '/home';
    } catch (err) {
      console.log('로그인 실패', err);
    }
  };

  useEffect(() => {
    if (isEmailValid) {
      setButtonAct(true);
    } else {
      setButtonAct(false);
    }
  }, [email, password]);

  const isEmailValid = validateEmail(email);

  return (
    <div className="bg-green-200 h-[500px] rounded-3xl w-[600px] mt-[200px] mx-auto ">
      <form className="space-y-6 w-[500px] mx-auto pt-10" onSubmit={submitHandler}>
        <div className="w-full">
          <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900">
            이메일
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          {!isEmailValid && (
            <p className="text-red-500 text-xs italic px-2.5">이메일이 유효하지 않습니다.</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 ">
            비밀번호
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {buttonAct === true ? (
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            로그인
          </button>
        ) : (
          <div>
            <div className="flex justify-center text-red-300">
              이메일 및 비밀번호 조건이 충족되면 버튼이 생깁니다.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
const validateEmail = email => {
  if (email !== '') {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  return false;
};
