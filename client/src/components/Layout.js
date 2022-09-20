import Side from './Side';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function Layout() {
  return (
    <div className="flex">
      <div className="h-screen min-w-[350px] flex-initial ">
        <Side />
      </div>
      <div className="w-full relative flex flex-col ">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
