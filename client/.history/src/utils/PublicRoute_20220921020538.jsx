import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';
import { useAuth } from '../contexts/AuthProvider';

const PublicRoutes = () => {
  const {isLoggedIn} = useAuth()

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
