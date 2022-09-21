import Side from './Side';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex">
      <div className="h-screen min-w-[350px] flex-initial ">
        <Side />
      </div>
      <div className="w-full relative flex flex-col ">
        <Header />
        <div className="basis-10/12 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
