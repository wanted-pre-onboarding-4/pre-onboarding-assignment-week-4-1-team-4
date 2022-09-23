import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';
import { CreateLink } from '../utils/makeLink';

const Search = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchHandler = e => {
    console.log(e);
    CreateLink(search, 5, location, navigate);
  };

  return (
    <form action="" method="get" className="flex items-center rounded-md bg-white">
      <label className="flex items-center px-2">
        <BiSearchAlt className="fill-gray-500" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-transparent outline-none ml-2"
        />
      </label>
      <button
        disabled={!search}
        className="bg-blue-500 px-2 py-1 rounded-tr-md rounded-br-md text-white disabled:bg-gray-300"
        onClick={setSearch}
      >
        검색
      </button>
    </form>
  );
};

export default Search;
