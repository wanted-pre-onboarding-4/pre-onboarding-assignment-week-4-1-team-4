import Side from './Side';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function Layout() {
  return (
    <div className="flex">
      <div className="h-screen flex-initial w-1/4">
        <Side />
      </div>
      <div className="relative flex flex-col ml-5">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
