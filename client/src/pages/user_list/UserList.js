import React, { useEffect, useState } from 'react';
import { getUserByURL } from '../../services/account';
import { useLocation } from 'react-router-dom';
import User from './components/User';
function UserList() {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const getUserList = async () => {
    const res = await getUserByURL(location.search);
    console.log(res.data);
    setUsers(res.data);
  };
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <div className="px-4 py-8 w-screen bg-gray-100 min-w-[1500px] ">
        <table className="bg-gray-200 w-full border-solid border-[1px]">
          <thead className="flex w-full px-2 py-4 ">
            <tr className="flex justify-between w-full">
              <th className="justify-center flex flex-1">고객명</th>
              <th className="justify-center flex flex-1">보유중인 계좌수</th>
              <th className="justify-center flex flex-1">이메일 주소</th>
              <th className="justify-center flex flex-1">성별코드</th>
              <th className="justify-center flex flex-1">생년월일</th>
              <th className="justify-center flex flex-1">휴대폰 번호</th>
              <th className="justify-center flex flex-1">최근 로그인</th>
              <th className="justify-center flex flex-1">혜택 수신 동의 여부</th>
              <th className="justify-center flex flex-1">활성화 여부</th>
              <th className="justify-center flex flex-1">가입일</th>
            </tr>
          </thead>
          {users.map(user => (
            <User user={user} key={user.uuid} />
          ))}
        </table>
      </div>
    </>
  );
}

export default UserList;
