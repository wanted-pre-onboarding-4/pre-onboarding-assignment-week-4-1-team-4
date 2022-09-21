import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
const Search = () => {
  return (
    <form action="" method="get" className='flex items-center px-2 py-1 rounded-sm bg-white' >
      <label className='flex items-center '>
        <BiSearchAlt className='fill-gray-500'/>
        <input type="text" className='bg-transparent'/>
      </label>
      <button className='bg-blue-500'>검색</button>
    </form>
  )
}

export default Search