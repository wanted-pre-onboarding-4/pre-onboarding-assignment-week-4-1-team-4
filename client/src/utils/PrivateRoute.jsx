import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';
import authStore from '../store/AuthStore';

const PrivateRoute = () => {
  const { token } = authStore();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
