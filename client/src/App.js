import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/home/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<div>gsdg</div>} />
          <Route path="/users" element={<div>유저 목록 페이지</div>} />
          <Route path="/users/:user_id" element={<div>유저 상세 페이지</div>} />
          <Route path="/accounts" element={<div>계좌 목록 페이지</div>} />
          <Route path="/accounts/:account_id" element={<div>계좌 상세 페이지</div>} />
          <Route path="*" element={<div>404페ㅇㅎㄴㅇ이지</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
