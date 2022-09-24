import brokers from '../../../data/brokers.json';
import accountStatus from '../../../data/accountStatus.json';
import brokersFormat from '../../../data/brokerFormat.json';
import { getDateAndTime, maskingAccount, getAccountFormat } from '../../../utils/funcs';
import { style } from './UserAccountList';
import { useNavigate } from 'react-router-dom';

export default function UserAccountItem({ account }) {
  const navigate = useNavigate();
  const { name, number, assets, broker_id, created_at, is_active, payments, status, id } = account;

  return (
    <tr>
      <td className={`${style.td}`}>{brokers[broker_id]}</td>
      <td
        className={`${style.td} hover:underline cursor-pointer`}
        onClick={() => navigate(`/accounts/${id}`)}
      >
        {getAccountFormat(maskingAccount(number), brokersFormat[broker_id])}
      </td>

      <td className={`${style.td}`}>{accountStatus[status]}</td>
      <td className={`${style.td}`}>{name}</td>
      <td className={`${style.td}`}>{Number(assets).toLocaleString()}</td>
      <td className={`${style.td}`}>{Number(payments).toLocaleString()}</td>
      <td className={`${style.td}`}>{is_active ? 'YES' : 'NO'}</td>
      <td className={`${style.td}`}>{getDateAndTime(created_at)}</td>
    </tr>
  );
}
