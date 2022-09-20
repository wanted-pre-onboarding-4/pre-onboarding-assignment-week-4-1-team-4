function Header() {
  function ClickLogOut() {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('userToken');
    document.location.href = '/';
  }
  return (
    <div className=" basis-2/12">
      <button
        onClick={ClickLogOut}
        className="bg-green-300 rounded-3xl w-[150px] float-right mr-[100px] mt-5"
      >
        로그아웃
      </button>
    </div>
  );
}

export default Header;
