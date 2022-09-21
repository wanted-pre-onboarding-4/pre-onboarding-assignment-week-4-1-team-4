import React from 'react';
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
const Header = () => {
  return (
    <Wrap>
      <PageHeader
        className="site-page-header"
        style={{ width: '100%' }}
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[<UserName>dddd님 안녕하세요</UserName>]}
      ></PageHeader>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: block;
  width: 86vw;
`;

const UserName = styled.div`
  width: 100%;
  margin-top: 4px;
  text-align: right;
`;
export default Header;
