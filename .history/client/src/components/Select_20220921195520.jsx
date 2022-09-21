import React from 'react';

const Select = ({ options = ["대신증권"], name }) => {

  const optionClickHandler = (option) => {
    console.log("asd")
  }

  return (
    <select className="p-1 rounded-sm w-36 outline-none"  onClick={()=>optionClickHandler("sd")}>
      <option value="" >{name}</option>
      {options.map(option => (
        <option key={option} value={option} onClick={()=>console.log("sd")}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
