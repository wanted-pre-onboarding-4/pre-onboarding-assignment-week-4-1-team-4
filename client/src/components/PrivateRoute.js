import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const token = localStorage.getItem('userToken');
  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
