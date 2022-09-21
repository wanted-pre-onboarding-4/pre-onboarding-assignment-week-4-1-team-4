import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom/dist';
import { useAuth } from '../contexts/AuthProvider';

const PublicRoutes = () => {
  const {isLoggedIn} = useAuth()
  const {location} = useLocation()
  return isLoggedIn ? <Navigate to={location} /> : <Outlet />;
};

export default PublicRoutes;
