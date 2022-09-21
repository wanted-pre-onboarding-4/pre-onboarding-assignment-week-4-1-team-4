import React from 'react'

const Select = ({option=[],name}) => {
  return (
    <select className='p-2'>
      <option value="">{name}</option>
    </select>
  )
}

export default Select