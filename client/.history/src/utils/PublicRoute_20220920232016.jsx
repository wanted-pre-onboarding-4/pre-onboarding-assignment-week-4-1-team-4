import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';
import storage from './storage';

const PublicRoutes = () => {
  const token = storage.get();

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
