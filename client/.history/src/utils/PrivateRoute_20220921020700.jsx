import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';
import { useAuth } from '../contexts/AuthProvider';

const PrivateRoute = () => {
  const {isLoggedIn} = useAuth()
  console.log(isLoggedIn)
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
