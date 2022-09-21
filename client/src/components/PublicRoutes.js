import { Navigate } from 'react-router-dom';
import Login from '../pages/home/Login';

function PublicRoutes() {
  const token = localStorage.getItem('userToken');
  return token ? <Navigate to="/home" /> : <Login />;
}
export default PublicRoutes;
