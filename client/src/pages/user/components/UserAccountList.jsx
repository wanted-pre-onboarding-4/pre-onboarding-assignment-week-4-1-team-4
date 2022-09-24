import UserAccountItem from './UserAccountItem';

export const style = {
  border: 'border border-solid border-slate-200',
  th: 'px-5 py-4 border border-solid border-slate-200 bg-zinc-50',
  td: 'px-5 py-4 text-center border border-solid border-slate-200',
};

export default function UserAccountList({ userAccounts }) {
  return (
    <>
      {userAccounts && (
        <table className={`${style.border} border-collapse`}>
          <thead>
            <tr>
              <th className={`${style.th}`}>증권사</th>
              <th className={`${style.th}`}>계좌번호</th>
              <th className={`${style.th}`}>계좌상태</th>
              <th className={`${style.th}`}>계좌명</th>
              <th className={`${style.th}`}>평가금액</th>
              <th className={`${style.th}`}>입금금액</th>
              <th className={`${style.th}`}>계좌활성화여부</th>
              <th className={`${style.th}`}>계좌개설일</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {userAccounts.map(account => (
              <UserAccountItem key={account.id} account={account} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
