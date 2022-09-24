import React, { useEffect, useState } from 'react';
import { getUserByURL } from '../../services/account';
import { useLocation } from 'react-router-dom';
import Pagenation from '../../components/Pagenation';
import Select from '../../components/Select';
import Search from '../../components/Search';
import { dataInfo } from '../../utils/dataInfo';
function UserList() {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(+location.search.split('&')[0].split('page=')[1]);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState();

  const getUserList = async url => {
    const res = await getUserByURL(url || location.search);
    setUsers(res.data);
    setTotal(res.headers['x-total-count']);
  };
  useEffect(() => {
    getUserList();
  }, [limit, page]);

  return (
    <>
      <div className="px-4 py-8 w-screen bg-gray-100 min-w-[1500px] ">
        <div className="flex items-center gap-x-10 mb-4">
          <div className="space-x-2">
            {/* <Select
              name="계좌 활성화"
              options={{ 0: '전체', true: '활성화', false: '비활성화' }}
              setFunction={setIsActive}
              index={1}
              setPage={setPage}
            />
            <Select
              name="임직원 여부"
              options={{ 0: '전체', true: '임직원', false: '비임직원' }}
              index={6}
              setFunction={setIsStaff}
              setPage={setPage}
            /> */}

            <Select
              name="페이지 당 게시물"
              options={{ 0: '5', 1: '10', 2: '15', 3: '20', 4: '50' }}
              setFunction={setLimit}
              index={3}
              setPage={setPage}
            />
          </div>
          <Search getAccountList={getUserList} />
        </div>
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
          {users && dataInfo(users, total, 0)}
        </table>
        {total !== undefined && (
          <Pagenation total={total} limit={limit} page={page} setPage={setPage} />
        )}
      </div>
    </>
  );
}

export default UserList;
