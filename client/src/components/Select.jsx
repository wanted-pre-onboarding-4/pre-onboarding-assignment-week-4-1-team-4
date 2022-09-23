import React from 'react';
import { CreateLink } from '../utils/makeLink';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FilterKey } from '../utils/FilterKey';
const Select = ({ name, options, setFunction, index, setPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const PageReturn = link => {
    const params = new URLSearchParams(link || location.search);
    console.log(params.toString());
    console.log(params.set('_page', 1));
    console.log(params.toString());
    navigate('?' + params.toString());
  };

  const optionClickHandler = e => {
    if (index === 0 || index === 1 || index === 2) {
      setFunction(e.target.value);
      const link = CreateLink(e.target.value, index, location, navigate);
      PageReturn(link);
    } else {
      setFunction(options[e.target.value]);
      const link = CreateLink(options[e.target.value], index, location, navigate);
      PageReturn(link);
    }
  };
  return (
    <select className="p-1 rounded-sm w-38 outline-none" onChange={e => optionClickHandler(e)}>
      <option disabled="disabled" selected="selected" value="">
        {name}
      </option>
      {Object.entries(options).map(option => (
        <option key={option} value={option[0]}>
          {option[1]}
        </option>
      ))}
    </select>
  );
};

export default Select;
