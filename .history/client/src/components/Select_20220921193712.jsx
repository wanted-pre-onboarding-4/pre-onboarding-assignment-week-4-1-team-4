import React from 'react'

const Select = ({option=[],name}) => {
  return (
    <select>
      <option value="" className='p-2'>{name}</option>
    </select>
  )
}

export default Select