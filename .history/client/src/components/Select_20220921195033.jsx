import React from 'react';

const Select = ({ options = ["대신증권"], name }) => {

  const optionClickHandler = (option) => {
    console.log(option)
  }

  return (
    <select className="p-1 rounded-sm w-36 outline-none">
      <option value="">{name}</option>
      {options.map(option => (
        <option key={option} value={option} onChange={()=>optionClickHandler(option)}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
