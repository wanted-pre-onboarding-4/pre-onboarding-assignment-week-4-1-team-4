import React, { useEffect } from 'react';
import { getAccounts } from '../../services/account';

const AccountList = () => {
  // const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const getAccountList = async () => {
      const res = await getAccounts();
      console.log('res', res);
    };
    getAccountList();
  }, []);

  return (
    <div className='grid w-full'>
      <div className='grid grid-flow-col grid-cols-10 items-center content-center justify-between'>
        <div>증권사</div>
        <div>계좌번호</div>
        <div>고객명</div>
        <div>운용상태</div>
        <div>계좌명</div>
        <div>평가금액</div>
        <div>입금금액</div>
        <div>수익률</div>
        <div>계좌활성화</div>
        <div>계좌개설일</div>
      </div>
    </div>
  );
};

export default AccountList;
