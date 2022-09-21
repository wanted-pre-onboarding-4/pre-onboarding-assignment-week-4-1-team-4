import React from 'react';
import { Navigate, Outlet} from 'react-router-dom/dist';
import authStore from '../store/AuthStore';

const PublicRoutes = () => {
  const {token } = authStore();
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
