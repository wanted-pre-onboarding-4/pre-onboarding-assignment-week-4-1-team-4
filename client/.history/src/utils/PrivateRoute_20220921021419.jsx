import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom/dist';
import { useAuth } from '../contexts/AuthProvider';

const PrivateRoute = () => {
  const {isLoggedIn} = useAuth()
  const {pathname} = useLocation()
  console.log('pathname', pathname)
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
