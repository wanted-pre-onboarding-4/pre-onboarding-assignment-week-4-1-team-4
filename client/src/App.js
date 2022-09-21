import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoutes from './components/PublicRoutes';
import Login from './pages/home/Login';
import UserList from './pages/users/UserList';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<div>404페ㅇㅎㄴㅇ이지</div>} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<div></div>} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:user_id" element={<div>유저 상세 페이지</div>} />
            <Route path="/accounts" element={<UserList />} />
            <Route path="/accounts/:account_id" element={<div>계좌 상세 페이지</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
