import { getDate, getDateAndTime, maskingPhoneNumber, getFullAddress } from '../../../utils/funcs';
export default function UserInfo({ userData }) {
  const {
    photo,
    name,
    gender_origin,
    birth_date,
    address,
    detail_address,
    email,
    phone_number,
    created_at,
    updated_at,
    last_login,
    allow_invest_push,
    is_active,
    is_staff,
  } = userData;

  const style = {
    border: 'border border-solid border-slate-200',
    th: 'px-5 py-4 w-[200px] border border-solid border-slate-200 bg-zinc-50',
    td: 'px-5 py-4 w-[250px] text-end border border-solid border-slate-200',
  };

  return (
    <>
      {userData && (
        <div className="flex">
          <div className="mr-[15px]">
            <img alt="user_image" src={photo} />
          </div>
          <table className={`${style.border} border-collapse`}>
            <tbody className="bg-white">
              <tr>
                <th className={`${style.th}`}>이름</th>
                <td className={`${style.td}`}>{name}</td>
                <th className={`${style.th}`}>성별 코드</th>
                <td className={`${style.td}`}>{gender_origin}</td>
                <th className={`${style.th}`}>생년월일</th>
                <td className={`${style.td}`}>{getDate(birth_date)}</td>
              </tr>

              <tr>
                <th className={`${style.th}`}>주소</th>
                <td className={`${style.td}`}>{getFullAddress(address, detail_address)}</td>
                <th className={`${style.th}`}>이메일</th>
                <td className={`${style.td}`}>{email}</td>
                <th className={`${style.th}`}>핸드폰</th>
                <td className={`${style.td}`}>{maskingPhoneNumber(phone_number)}</td>
              </tr>

              <tr>
                <th className={`${style.th}`}>가입 시각</th>
                <td className={`${style.td}`}>{getDateAndTime(created_at)}</td>
                <th className={`${style.th}`}>최종 수정 시각</th>
                <td className={`${style.td}`}>{getDateAndTime(updated_at)}</td>
                <th className={`${style.th}`}>최종 로그인 시각</th>
                <td className={`${style.td}`}>{getDateAndTime(last_login)}</td>
              </tr>

              <tr>
                <th className={`${style.th}`}>혜택 수신 동의 여부</th>
                <td className={`${style.td}`}>{allow_invest_push ? 'YES' : 'NO'}</td>
                <th className={`${style.th}`}>활성화 여부</th>
                <td className={`${style.td}`}>{is_active ? 'YES' : 'NO'}</td>
                <th className={`${style.th}`}>임직원 여부</th>
                <td className={`${style.td}`}>{is_staff ? 'YES' : 'NO'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
