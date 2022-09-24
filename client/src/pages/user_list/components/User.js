import { useEffect, useState } from 'react';
import { getUserAccounts } from '../../../services/account';
import { getUserSettingDetail } from '../../../utils/getUserSettingDetail';
function User({ user }) {
  const { name, birth_date, gender_origin, id, last_login, phone_number, email, created_at, uuid } =
    user;
  const [userAccounts, setUserAccounts] = useState([]);
  const [userSetting, setUserSetting] = useState({});
  console.log(user);
  useEffect(() => {
    const getUserData = async () => {
      const res = await getUserAccounts(id);
      setUserAccounts(res.data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    const getUserSettingData = async () => {
      const res = await getUserSettingDetail(uuid);
      setUserSetting(res);
    };
    getUserSettingData();
  }, [user]);
  function FormatDate(date, index) {
    date = date.split('-');
    if (index === 0) {
      return date[0] + '년 ' + date[1] + '월 ' + date[2].substring(0, 2) + '일';
    }
    return (
      date[0].substring(2, 4) +
      '년 ' +
      date[1] +
      '월 ' +
      date[2].substring(0, 2) +
      '일 ' +
      date[2].substring(3, 5) +
      '시 ' +
      date[2].substring(6, 8) +
      '분'
    );
  }
  return (
    <>
      {userAccounts.length !== 0 && (
        <tbody className="flex items-center justify-between w-full bg-white py-2 text-sm">
          <tr className="justify-center flex flex-1">
            <td>{name}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{userAccounts.length}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{email}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{gender_origin}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{FormatDate(birth_date, 0)}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{phone_number.substring(0, 3) + '-****-' + phone_number.substring(9, 13)}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{FormatDate(last_login, 1)}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{userSetting?.allow_marketing_push ? 'YES' : 'NO'}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{userSetting?.is_active ? 'YES' : 'NO'}</td>
          </tr>
          <tr className="justify-center flex flex-1">
            <td>{FormatDate(created_at, 0)}</td>
          </tr>
        </tbody>
      )}
    </>
  );
}

export default User;
