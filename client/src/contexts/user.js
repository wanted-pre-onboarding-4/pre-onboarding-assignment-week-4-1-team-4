import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import token from '../utils/token';

export const UserContext = createContext({
  user: { email: '', id: null },
  setUserInfo: () => {},
});

const getInitialUser = () => {
  let result;
  if (token.get()) {
    const { email, sub } = jwt_decode(token.get());
    result = { email, id: +sub };
  } else {
    result = { email: '', id: null };
  }
  return result;
};

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(getInitialUser());
  const value = {
    user: userInfo,
    setUserInfo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
