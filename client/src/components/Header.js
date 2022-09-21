import { useLocation } from 'react-router-dom';
function Header() {
  const pathName = useLocation().pathname;
  function Path() {
    console.log(pathName);
    switch (pathName) {
      case '/':
        return <>4</>;
      case '/accounts':
        return <>3</>;
      case '/users':
        return <>2</>;
    }
  }
  return (
    <div className=" basis-1/12">
      <div className="clear-both">{Path()}</div>
    </div>
  );
}

export default Header;
