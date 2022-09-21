import React from 'react';

const Select = ({ options = [], name }) => {
  return (
    <select className="p-1 rounded-sm w-36 outline-none">
      <option value="">{name}</option>
      {options.map(option => (
        <option value={option.value}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
