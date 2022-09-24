import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';
import { getAccounts } from '../../services/account';
import { useLocation } from 'react-router-dom';
import brokers from '../../data/brokers.json';
import Select from '../../components/Select';
import accountStatus from '../../data/accountStatus.json';
import Pagenation from '../../components/Pagenation';
import { dataInfo } from '../../utils/dataInfo';

const AccountList = () => {
  const location = useLocation();

  const [accounts, setAccounts] = useState([]);
  const [page, setPage] = useState(+location.search.split('&')[0].split('page=')[1]);
  const [brokerId, setBrokerId] = useState();
  const [isActive, setIsActive] = useState(true);
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState();
  const [total, setTotal] = useState();
  const [search, setSearch] = useState();

  const getAccountList = async url => {
    const res = await getAccounts(url || location.search);
    setAccounts(res.data);
    setTotal(res.headers['x-total-count']);
  };

  useEffect(() => {
    getAccountList();
  }, [limit, isActive, brokerId, status, page, search]);

  return (
    <>
      <div className="px-4 py-8 w-screen bg-gray-100 min-w-[1600px] ">
        <div className="flex items-center gap-x-10 mb-4">
          <div className="space-x-2">
            <Select
              name="증권사"
              options={brokers}
              index={0}
              setFunction={setBrokerId}
              setPage={setPage}
            />
            <Select
              name="계좌 활성화"
              options={{ 0: '전체', true: '활성화', false: '비활성화' }}
              setFunction={setIsActive}
              index={1}
              setPage={setPage}
            />
            <Select
              name="계좌 상태"
              options={accountStatus}
              index={2}
              setFunction={setStatus}
              setPage={setPage}
            />
            <Select
              name="페이지 당 게시물"
              options={{ 0: '5', 1: '10', 2: '15', 3: '20', 4: '50' }}
              setFunction={setLimit}
              index={3}
              setPage={setPage}
            />
          </div>
          <Search
            getAccountList={getAccountList}
            setPage={setPage}
            setSearch={setSearch}
            search={search}
          />
        </div>
        <table className="bg-gray-200 w-full border-solid border-[1px]">
          <thead className="flex w-full px-2 py-4 ">
            <tr className="flex justify-between w-full">
              <th className="justify-center flex flex-1">증권사</th>
              <th className="justify-center flex flex-1">계좌번호</th>
              <th className="justify-center flex flex-1">고객명</th>
              <th className="justify-center flex flex-1">운용상태</th>
              <th className="justify-center flex flex-1">계좌명</th>
              <th className="justify-center flex flex-1">평가금액</th>
              <th className="justify-center flex flex-1">입금금액</th>
              <th className="justify-center flex flex-1">수익률</th>
              <th className="justify-center flex flex-1">계좌활성화</th>
              <th className="justify-center flex flex-1">계좌개설일</th>
            </tr>
          </thead>
          {accounts && dataInfo(accounts, total, 1)}
        </table>
        {total !== undefined && (
          <Pagenation total={total} limit={limit} page={page} setPage={setPage} />
        )}
      </div>
    </>
  );
};

export default AccountList;
