import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { UserContext } from './contexts/user';
import AccountList from './pages/AccountList/AccountList';
import Login from './pages/Login/Login';

function App() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="font-bold">홈</div>} />
        <Route
          path="/login"
          element={user.id ? <Navigate to="/accounts?_page=1&_limit=20" /> : <Login />}
        />
        <Route element={!user.id ? <Navigate to="/login" /> : <Layout />}>
          <Route path="/users" element={<div>유저 목록 페이지</div>} />
          <Route path="/users/:user_id" element={<div>유저 상세 페이지</div>} />
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/accounts/:account_id" element={<div>계좌 상세 페이지</div>} />
        </Route>
        <Route path="*" element={<div>404페이지</div>} />
      </Routes>
    </Router>
  );
}

export default App;
