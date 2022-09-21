import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
// import Sider from '../../components/Sider';
import Sider2 from '../../components/Sider2';
const Users = () => {
  return (
    <Wrap>
      {/* <Sider /> */}
      <Sider2 />
      <UserWrap>
        <Header />
      </UserWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  background-color: beige;
`;
const UserWrap = styled.div``;
export default Users;
