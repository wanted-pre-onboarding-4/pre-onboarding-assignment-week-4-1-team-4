import React from 'react';

const Select = ({ options = ["대신증권"], name }) => {

  const optionClickHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <select className="p-1 rounded-sm w-36 outline-none">
      <option value="">{name}</option>
      {options.map(option => (
        <option value={option} onClick={optionClickHandler}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
