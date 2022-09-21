import React from 'react';
import { BankOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Sider2 = () => {
  const navigate = useNavigate();

  useEffect(() => {});

  const isPageMove = e => {
    navigate(`/${e.key}`);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('계좌 목록', 'accounts', <BankOutlined />),
    getItem('사용자', 'users', <UserOutlined />),
    getItem('로그아웃', 'sub3', <LogoutOutlined />),
  ];
  return (
    <Wrap>
      <Menu
        onClick={isPageMove}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        style={{
          width: '14vw',
          height: '100vh',
        }}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 246;
  height: 100vh;
`;

export default Sider2;
