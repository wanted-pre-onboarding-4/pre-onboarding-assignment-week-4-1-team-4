import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineCalendar,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { getDate, getFullAddress } from '../../../utils/funcs';
import { useState } from 'react';
import { putUser } from '../../../services/account';
import { useMutation } from 'react-query';

export default function UpdateUser({ userInfo, toggleModal }) {
  const style = {
    label: 'flex items-center block text-gray-700 text-sm font-bold mb-2',
    input:
      'mt-1 block w-full px-10 py-3  bg-white  border-solid border-[1px] rounded text-sm shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1',
    svg: 'mr-2 absolute mt-3.5 ml-3.5 text-lg',
  };

  const [formValid, setFormValid] = useState(false);
  const [name, setName] = useState(userInfo.name);
  const [password, setPassword] = useState('');

  const updateHandler = async e => {
    e.preventDefault();
    const updated_at = new Date().toISOString();
    const updateInputs = {
      ...userInfo,
      name,
      password,
      updated_at,
    };
    const variables = {
      id: userInfo.id,
      updateInputs,
    };
    update(variables);
  };

  const { mutate: update } = useMutation(
    async variables => {
      return await putUser(variables.id, variables.updateInputs);
    },
    {
      onSuccess: () => {
        toggleModal();
      },
      onError: res => {
        console.error(res);
      },
    }
  );

  const onChangeName = e => {
    setName(e.target.value);
    if (e.target.value.length > 2 && password) {
      setFormValid(true);
    } else setFormValid(false);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
    if (e.target.value.length > 2 && password) {
      setFormValid(true);
    } else setFormValid(false);
  };

  return (
    <form onSubmit={updateHandler} className="flex flex-col gap-y-4 p-6">
      <h1 className="font-semibold text-2xl">사용자 정보수정</h1>
      <div className="mb-4">
        <label className={`${style.label}`} />
        <BsPerson className={`${style.svg}`} />
        <input
          type="text"
          value={name || ''}
          className={`${style.input}`}
          onChange={onChangeName}
          placeholder="사용자명을 입력하세요 (3글자 이상)"
        />

        <label className={`${style.label}`} />
        <AiOutlineMail className={`${style.svg}`} />
        <input
          type="text"
          value={userInfo.email}
          disabled
          className={`${style.input}  cursor-not-allowed`}
        />

        <label className={`${style.label}`} />
        <AiOutlinePhone className={`${style.svg}`} />
        <input
          type="text"
          disabled
          value={userInfo.phone_number}
          className={`${style.input} cursor-not-allowed`}
        />

        <label className={`${style.label}`} />
        <AiOutlineCalendar className={`${style.svg}`} />
        <input
          type="text"
          disabled
          value={getDate(userInfo.birth_date)}
          className={`${style.input} cursor-not-allowed`}
        />

        <label className={`${style.label}`} />
        <AiOutlineHome className={`${style.svg} cursor-not-allowed`} />
        <input
          type="text"
          disabled
          value={getFullAddress(userInfo.address, userInfo.detail_address)}
          className={`${style.input} cursor-not-allowed`}
        />

        <label className={`${style.label}`} />
        <AiOutlineLock className={`${style.svg}`} />
        <input
          type="password"
          autoComplete="off"
          onChange={onChangePassword}
          placeholder="비밀번호를 입력하세요"
          className={`${style.input}`}
        />
      </div>

      <button
        className="flex items-center justify-center space-x-2 w-full text-lg border-solid border-[1px] p-2 rounded text-white bg-blue-900 duration-200 disabled:text-gray-400 disabled:bg-gray-100"
        disabled={!formValid}
      >
        <span>수정</span>
      </button>

      <button
        onClick={toggleModal}
        className="flex items-center justify-center space-x-2 w-full text-lg border-solid border-[1px] p-2 rounded text-gray-500  bg-gray-200"
      >
        <span>취소</span>
      </button>
    </form>
  );
}
