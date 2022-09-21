import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';
import { useAuth } from '../contexts/AuthProvider';

const PrivateRoute = () => {
  const {isLoggedIn} = useAuth()
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
