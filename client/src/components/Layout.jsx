import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sider from './Sider';

const Layout = () => {
  return (
    <div className="flex">
      <Sider />
      <Header />
      <div className="flex-1 px-12 ml-48 mt-28">
        <Outlet />
        <footer className="border-2 flex justify-center items-center h-36 font-bold">
          <span>Copyright © December and Company Inc.</span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
