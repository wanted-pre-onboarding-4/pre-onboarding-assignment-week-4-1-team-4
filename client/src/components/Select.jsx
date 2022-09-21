import React from 'react';
import brokers from '../data/brokers.json';

const Select = ({ name, options }) => {
  const optionClickHandler = e => {
    console.log(e.target.value);
  };
  console.log(Object.entries(brokers));
  return (
    <select className="p-1 rounded-sm w-36 outline-none" onChange={e => optionClickHandler(e)}>
      <option>{name}</option>
      {Object.entries(options).map(option => (
        <option key={option} value={option[0]}>
          {option[1]}
        </option>
      ))}
    </select>
  );
};

export default Select;
