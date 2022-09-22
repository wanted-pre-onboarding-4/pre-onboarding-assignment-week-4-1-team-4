import React from 'react';
import { CreateLink } from '../utils/makeLink';
import { useNavigate, useLocation } from 'react-router-dom';

const Select = ({ name, options, setFunction, index }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const optionClickHandler = e => {
    if (index === 0 || index === 1 || index === 2) {
      setFunction(e.target.value);
      CreateLink(e.target.value, index, location, navigate);
    } else {
      setFunction(options[e.target.value]);
      CreateLink(options[e.target.value], index, location, navigate);
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
