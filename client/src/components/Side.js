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
