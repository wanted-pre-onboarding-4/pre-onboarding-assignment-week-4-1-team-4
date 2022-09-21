import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import axios from 'axios';
const Login = () => {
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(REACT_APP_BASE_URL);
  const [userInfo, setUserInfo] = useState({
    userEmail: '',
    userPassword: '',
  });

  const { userEmail, userPassword } = userInfo;

  const condition = userEmail.includes('@') && userPassword.length >= 4;
  const getUserInfo = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Wrap>
      <LoginForm>
        <Title>Login Page</Title>
        <InputUserSection>
          <InputUserId>
            <InputTitle>회원 아이디</InputTitle>
            <Input
              placeholder="이메일을 입력해주세요."
              name="userEmail"
              onChange={getUserInfo}
              prefix={<UserOutlined />}
            />
          </InputUserId>
          <InputUserPassword>
            <InputTitle>바밀번호</InputTitle>

            <Input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              name="userPassword"
              onChange={getUserInfo}
              prefix={<LockOutlined />}
            />
          </InputUserPassword>
        </InputUserSection>
        <LoginFooter>
          <Button type="primary" disabled={!condition} style={{ width: '100%' }}>
            로그인
          </Button>
        </LoginFooter>
      </LoginForm>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.lightGrey};
`;

const LoginForm = styled.form`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  padding: 36px 30px;
  background-color: white;
  border-radius: ${props => props.theme.bordeRadius};
  box-shadow: ${props => props.theme.lowModalShadow};
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 30px;
`;
const InputUserSection = styled.div``;

const InputTitle = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;
const InputUserId = styled.div``;
const InputUserPassword = styled.div`
  padding-top: 20px;
`;
const LoginFooter = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  margin-top: 30px;
`;

export default Login;
