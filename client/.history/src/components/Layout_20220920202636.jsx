import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

const Layout = () => {
  return (
    <>
      <Sider />
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
