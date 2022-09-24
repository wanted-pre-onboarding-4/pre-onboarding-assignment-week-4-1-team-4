import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserAccounts } from '../../../services/account';
import { FormatDate } from '../../../utils/funcs';
import { getUserSettingDetail } from '../../../utils/getUserSettingDetail';

function User({ user }) {
  const { name, birth_date, gender_origin, id, last_login, phone_number, email, created_at, uuid } =
    user;
  const [userAccounts, setUserAccounts] = useState([]);
  const [userSetting, setUserSetting] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const res = await getUserAccounts(id);
      setUserAccounts(res.data);
    };
    getUserData();
  }, []);

  const handleUserClick = () => {
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    const getUserSettingData = async () => {
      const res = await getUserSettingDetail(uuid);
      setUserSetting(res);
    };
    getUserSettingData();
  }, [user]);

  return (
    <>
      {userAccounts.length !== 0 && (
        <tbody className="flex items-center justify-between w-full bg-white py-2 text-sm">
          <tr className="justify-center flex flex-1 hover:underline cursor-pointer">
            <td onClick={handleUserClick}>{name}</td>
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
