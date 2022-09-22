import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';
const Search = ({ getAccountList }) => {
  const [enteredSearch, setEnteredSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const searchHandler = e => {
    e.preventDefault();
    navigate(`${location.search}?q=${enteredSearch}`);
    getAccountList();
  };

  return (
    <form
      action=""
      method="get"
      className="flex items-center rounded-md bg-white"
      onSubmit={searchHandler}
    >
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
      >
        검색
      </button>
    </form>
  );
};

export default Search;
