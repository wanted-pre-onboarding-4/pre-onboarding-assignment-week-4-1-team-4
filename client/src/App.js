import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import GlobalStyle from './styles/Globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>로그인 페이지</div>} />
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
