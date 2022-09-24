import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';
import { createLink } from '../utils/makeLink';
import { pageReturn } from '../utils/funcs';

const Search = ({ getAccountList }) => {
  const [enteredSearch, setEnteredSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const searchHandler = e => {
    e.preventDefault();
    let url = createLink(enteredSearch, 5, location, navigate);
    url = pageReturn(url, navigate);
    getAccountList(url);
  };

  return (
    <form action="" method="get" className="flex items-center rounded-md bg-white">
      <label className="flex items-center px-2">
        <BiSearchAlt className="fill-gray-500" />
        <input
          type="text"
          value={enteredSearch}
          onChange={e => setEnteredSearch(e.target.value)}
          className="bg-transparent outline-none ml-2"
        />
      </label>
      <button
        disabled={!enteredSearch}
        className="bg-blue-500 px-2 py-1 rounded-tr-md rounded-br-md text-white disabled:bg-gray-300"
        onClick={searchHandler}
      >
        검색
      </button>
    </form>
  );
};

export default Search;
