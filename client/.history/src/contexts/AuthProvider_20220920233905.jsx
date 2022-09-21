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
    await login(email, password) 
    setIsLoggedIn(true);
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