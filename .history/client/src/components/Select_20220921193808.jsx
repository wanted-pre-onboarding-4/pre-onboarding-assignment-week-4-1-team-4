import React from 'react'

const Select = ({option=[],name}) => {
  return (
    <select className='p-1 rounded-sm w-5'>
      <option value="">{name}</option>
    </select>
  )
}

export default Select