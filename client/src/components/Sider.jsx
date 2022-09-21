import React from 'react';
import styled from 'styled-components';
import { BankOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
const Sider = () => {
  return (
    <Wrap>
      <Title>Account Admin</Title>
      <Menus>
        <Menu>
          <MenuIcon>
            <BankOutlined style={{ fontSize: '18px', color: 'white' }}></BankOutlined>
          </MenuIcon>
          <MenuText>계좌 목록</MenuText>
        </Menu>
        <Menu>
          <MenuIcon>
            <UserOutlined style={{ fontSize: '18px', color: 'white' }}></UserOutlined>
          </MenuIcon>
          <MenuText>사용자 목록</MenuText>
        </Menu>
        <Menu>
          <MenuIcon>
            <LogoutOutlined style={{ fontSize: '18px', color: 'white' }}></LogoutOutlined>
          </MenuIcon>
          <MenuText>로그아웃</MenuText>
        </Menu>
      </Menus>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 15vw;
  height: 100vh;
  padding: 30px 10px;
  background-color: #152238;
`;
const Menus = styled.ul`
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  color: white;
`;
const Menu = styled.li`
  display: flex;
  padding-left: 20px;
  margin-bottom: 4px;
  align-items: center;
  height: 48px;
  font-size: 14px;
  cursor: pointer;
  background-color: #152238;
  opacity: 0.7;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const MenuText = styled.p`
  color: white;
`;
const MenuIcon = styled.div`
  margin-right: 10px;
`;

export default Sider;
