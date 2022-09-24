import Account from '../pages/account_list/components/Account';
import User from '../pages/user_list/components/User';
export const dataInfo = (datas, total, index) => {
  if (total === '0') {
    return <div className="text-center mt-3 mb-12 text-3xl  font-semibold">데이터가 없습니다</div>;
  }

  if (datas.length === 0) {
    return <div className="text-center mt-3 mb-12 text-3xl  font-semibold">Loading....</div>;
  }

  // if (index === 0) {
  //   return ;
  // } else {
  //   return ;
  // }
  return (
    <>
      {index === 0
        ? datas.map(user => <User key={user.uuid} user={user} />)
        : datas.map(account => <Account key={account.uuid} account={account} />)}
    </>
  );
};
