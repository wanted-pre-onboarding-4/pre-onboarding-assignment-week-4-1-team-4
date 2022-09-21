import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom/dist';
import { useAuth } from '../contexts/AuthProvider';

const PublicRoutes = () => {
  const {isLoggedIn} = useAuth()
  const {pathname} = useLocation()
  console.log(location)
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
