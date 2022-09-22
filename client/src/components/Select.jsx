import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const Select = ({ name, options, setFunction, index }) => {
  const FilterKey = { 0: 'broker_id', 1: 'is_active', 2: 'status', 3: '_limit' };
  const location = useLocation();
  const nav = useNavigate();
  function joinarray(temp) {
    return temp.join('&') === '' ? temp.join('&') : '&' + temp.join('&');
  }
  function isValueZero(value) {
    return value === '0' ? '' : '&' + FilterKey[index] + '=' + value;
  }
  function CreateLink(value) {
    if (location.search.includes(FilterKey[index])) {
      const temp = location.search
        .split(FilterKey[index])[1]
        .split('&')
        .filter(data => data !== '');
      temp.shift();
      nav(
        `${location.search.slice(0, location.search.indexOf(FilterKey[index]) - 1)}${isValueZero(
          value
        )}${joinarray(temp)}`
      );
    } else {
      nav(`${location.search}${isValueZero(value)}`);
    }
  }

  const optionClickHandler = e => {
    if (index === 0 || index === 1 || index === 2) {
      setFunction(e.target.value);
      CreateLink(e.target.value);
    } else {
      setFunction(options[e.target.value]);
      CreateLink(options[e.target.value]);
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
