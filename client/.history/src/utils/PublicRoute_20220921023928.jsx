import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom/dist';
import authStore from '../store/AuthStore';
// import { useAuth } from '../contexts/AuthProvider';

const PublicRoutes = () => {
  const {token } = authStore();
  const {pathname} = useLocation()
  console.log('pathname', pathname)
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
