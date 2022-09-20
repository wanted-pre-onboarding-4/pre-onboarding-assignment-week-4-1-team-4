import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import GlobalStyle from './styles/Globalstyles';
import { getToken } from './utils/func';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={getToken() ? <Navigate to="/users" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<div>유저 목록 페이지</div>} />
        <Route path="/users/:user_id" element={<div>유저 상세 페이지</div>} />
        <Route path="/accounts" element={<div>계좌 목록 페이지</div>} />
        <Route path="/accounts/:account_id" element={<div>계좌 상세 페이지</div>} />
        <Route path="*" element={<div>404페이지</div>} />
      </Routes>
    </Router>
  );
}

export default App;
