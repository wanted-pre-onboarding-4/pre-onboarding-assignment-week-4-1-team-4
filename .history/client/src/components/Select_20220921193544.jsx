import React from 'react'

const Select = ({option=[],name}) => {
  return (
    <select>
      <option value="">{name}</option>
    </select>
  )
}

export default Select