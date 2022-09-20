import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AccountList from './pages/AccountList/AccountList';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="font-bold">홈</div>} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
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
