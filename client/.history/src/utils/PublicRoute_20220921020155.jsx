import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import { useAuth } from '../contexts/AuthProvider';

const PublicRoutes = () => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn && <Outlet />;
};

export default PublicRoutes;
