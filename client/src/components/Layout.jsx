import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

const Layout = () => {
  return (
    <>
      <Sider />
      <div className="flex flex-col flex-1 ml-52">
        <Header />
        <div className="flex flex-1 max-w-[1700px] ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
