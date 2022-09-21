import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Login from './pages/login/Login';
import Users from './pages/users/Users';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<div>홈</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:user_id" element={<div>유저 상세 페이지</div>} />
          <Route path="/accounts" element={<div>계좌 목록 페이지</div>} />
          <Route path="/accounts/:account_id" element={<div>계좌 상세 페이지</div>} />
          <Route path="*" element={<div>404페이지</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
