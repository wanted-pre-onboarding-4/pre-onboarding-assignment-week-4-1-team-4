import { useEffect, useState } from 'react';
import * as API from '../../utils/api';
import UserTable from './UserTable';
function UserList() {
  const [users, setUsers] = useState([]);
  async function getData() {
    const res = await API.get('users');
    console.log(res.data);
    setUsers(res.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-5  bg-gray-100 h-full max-h-[800px] overflow-y-auto">
      <table className="bg-gray-200 w-full">
        <thead className="w-full">
          <tr className="w-full flex justify-between py-5">
            <th className="flex flex-1 justify-center">증권사</th>
            <th className="flex flex-1 justify-center">고객명</th>
            <th className="flex flex-1 justify-center">계좌번호</th>
            <th className="flex flex-1 justify-center">수익률</th>
            <th className="flex flex-1 justify-center">계좌명</th>
            <th className="flex flex-1 justify-center">평가금액</th>
            <th className="flex flex-1 justify-center">입금금액</th>
            <th className="flex flex-1 justify-center">운용상태</th>
            <th className="flex flex-1 justify-center">계좌활성화</th>
          </tr>
        </thead>
        {users.map(user => {
          return <UserTable key={user.id} user={user} />;
        })}
      </table>
    </div>
  );
}

export default UserList;
