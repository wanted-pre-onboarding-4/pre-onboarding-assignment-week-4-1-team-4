import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom/dist';
import authStore from '../store/AuthStore';

const PrivateRoute = () => {
  const {token } = authStore();
  const {pathname} = useLocation()
  console.log('pathname', pathname)
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
