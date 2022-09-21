import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
const Search = () => {
  return (
    <form action="" method="get" >
      <label className='flex border-solid border-white border-[1px] items-center px-2'>
        <BiSearchAlt/>
        <input type="text" className='bg-transparent'/>
      </label>
    </form>
  )
}

export default Search