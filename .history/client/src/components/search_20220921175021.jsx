import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
const Search = () => {
  return (
    <form action="" method="get" >
      <label className='flex border-solid space-x-2'>
        <BiSearchAlt/>
        <input type="text" />
      </label>
    </form>
  )
}

export default Search