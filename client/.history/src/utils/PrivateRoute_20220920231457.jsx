import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';
import storage from './storage';

const PrivateRoute = () => {
  const token = storage.get();
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
