import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
function Side() {
  function ClickLogOut() {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('userToken');
    document.location.href = '/';
  }
  const menus = [
    { name: 'Home', path: '/home' },
    { name: 'Users', path: '/users' },
    { name: 'Accounts', path: '/accounts' },
    { name: '설정', path: '/s' },
  ];
  const pathName = useLocation().pathname;
  return (
    <div className="h-full max-w-[350px] bg-green-300 ">
      <div className="mx-auto flex flex-col">
        <div className="text-center mx-auto">
          <img
            src={'https://www.fint.co.kr/static/imgs/logo-fint.57a4d0a6.svg'}
            width="100px"
            className="text-center"
          />
          <img src={'https://www.fint.co.kr/static/imgs/bicycle.d6903ad8.png'} width="100px" />
        </div>
        {menus.map((menu, index) => {
          return (
            <NavLink
              style={{ color: 'gray', textDecoration: 'none' }}
              to={menu.path}
              key={index}
              activestyle={{ color: 'yellow' }}
            >
              <SidebarItem menu={menu} isActive={pathName === menu.path ? true : false} />
            </NavLink>
          );
        })}
        <button
          onClick={ClickLogOut}
          className="hover:bg-yellow-200 text-center rounded-3xl text-gray-700 my-2"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
export default Side;
