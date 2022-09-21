import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Sider from '../../components/Sider';
import Footer from '../../components/Footer';
const Users = () => {
  return (
    <Wrap>
      <Sider />
      <UserWrap>
        <Header />
        <Footer />
      </UserWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  background-color: ${props => props.theme.lightGrey};
`;
const UserWrap = styled.div``;
export default Users;
