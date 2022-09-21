import { useLocation } from 'react-router-dom';
function Header() {
  function ClickLogOut() {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('userToken');
    document.location.href = '/';
  }
  const pathName = useLocation().pathname;
  function Path() {
    console.log(pathName);
    switch (pathName) {
      case '/':
        return <>4</>;
      case '/account':
        return <>3</>;
      case '/likedlist':
        return <>2</>;
      case '/setting':
        return <>1</>;
    }
  }
  return (
    <div className=" basis-2/12">
      <button
        onClick={ClickLogOut}
        className="bg-green-300 rounded-3xl w-[150px] block mr-[50px] mt-5 float-right"
      >
        로그아웃
      </button>
      <div className="clear-both">{Path()}</div>
    </div>
  );
}

export default Header;
