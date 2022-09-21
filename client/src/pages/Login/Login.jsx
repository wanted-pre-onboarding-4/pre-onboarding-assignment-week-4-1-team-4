import React, { useCallback, useState, useEffect, useContext } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user';
import api from '../../services/api';
import token from '../../utils/token';

const Login = () => {
  const { setUserInfo } = useContext(UserContext);

  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const { mutate, isSuccess, data, error } = useMutation(api.login);
  const navigate = useNavigate();

  const onLoginChange = useCallback(
    e => {
      const { placeholder, value } = e.target;
      placeholder === 'Email'
        ? setLoginInfo(prev => ({ ...prev, email: value }))
        : setLoginInfo(prev => ({ ...prev, password: value }));
    },
    [loginInfo]
  );

  const onLoginSubmit = useCallback(
    e => {
      e.preventDefault();
      mutate(loginInfo);
    },
    [loginInfo]
  );

  useEffect(() => {
    if (!isSuccess) return;
    const { accessToken, user } = data.data;
    token.set('adminToken', accessToken);
    setUserInfo(user);
    navigate('/accounts?_page=1&_limit=4');
  }, [isSuccess]);

  useEffect(() => {
    if (!error) return;
    alert(error.response.data);
  }, [error]);

  return (
    <div className="w-full h-[100vh] bg-slate-500 flex justify-center items-center">
      <div className="text-white w-[420px] h-[320px] px-20 py-10 rounded-md bg-[rgba(10,10,10,0.2)] backdrop-blur-md">
        <h1>Log in to your account</h1>
        <form onSubmit={onLoginSubmit} className="flex flex-col mt-10 space-y-10">
          <input
            onChange={onLoginChange}
            className="bg-transparent outline-none  border-b-2 placeholder-white pb-2"
            placeholder="Email"
          />
          <input
            onChange={onLoginChange}
            className="bg-transparent outline-none  border-b-2 placeholder-white pb-2"
            placeholder="Password"
          />
          <button className="border-2 py-1 rounded-sm active:scale-95">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
