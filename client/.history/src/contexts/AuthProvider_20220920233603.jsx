import { useContext, useEffect, useState } from 'react';
import { login } from '../services/auth';
import storage from '../utils/storage';
import AuthContext from './auth_context';

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = storage.get()
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const onLogout = () => {
    storage.remove()
    setIsLoggedIn(false);
  };

  const onLogin = async (email, password) => {
    const res =  await login(email, password) 
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem('accessToken', res.data.access_token);
      setIsLoggedIn(true);
    } else {
      window.alert(res.data?.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout,
        onLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;