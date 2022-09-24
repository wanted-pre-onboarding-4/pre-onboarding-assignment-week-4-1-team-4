import Account from '../pages/account_list/components/Account';
import User from '../pages/user_list/components/User';

export const dataInfo = (datas, total, index) => {
  if (total === '0') {
    return (
      <tbody>
        <tr>
          <td className="text-center mt-3 mb-12 text-3xl  font-semibold">데이터가 없습니다</td>
        </tr>
      </tbody>
    );
  }

  if (datas.length === 0) {
    return (
      <tbody>
        <tr>
          <td className="text-center mt-3 mb-12 text-3xl  font-semibold">Loading....</td>
        </tr>
      </tbody>
    );
  }

  return (
    <>
      {index === 0
        ? datas.map(user => <User key={user.uuid} user={user} />)
        : datas.map(account => <Account key={account.uuid} account={account} />)}
    </>
  );
};
