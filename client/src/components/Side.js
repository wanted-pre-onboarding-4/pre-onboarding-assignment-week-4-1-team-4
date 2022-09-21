import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
function Side() {
  const menus = [
    { name: 'Home', path: '/home' },
    { name: '나만의 맛집 리스트', path: '/account' },
    { name: '즐겨찾기 한 맛집 리스트', path: '/likedlist' },
    { name: '설정', path: '/setting' },
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
              exact
              style={{ color: 'gray', textDecoration: 'none' }}
              to={menu.path}
              key={index}
              activeStyle={{ color: 'yellow' }}
            >
              <SidebarItem menu={menu} isActive={pathName === menu.path ? true : false} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
export default Side;
