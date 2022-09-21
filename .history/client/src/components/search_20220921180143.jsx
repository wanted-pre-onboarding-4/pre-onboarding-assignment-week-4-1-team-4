import React, { useState } from 'react'
import {BiSearchAlt} from "react-icons/bi"
const Search = () => {
  const [enteredSearch, setEnteredSearch] = useState('')
  return (
    <form action="" method="get" className='flex items-center rounded-md bg-white' >
      <label className='flex items-center px-2'>
        <BiSearchAlt className='fill-gray-500'/>
        <input type="text" className='bg-transparent outline-none'/>
      </label>
      <button disabled={!enteredSearch.length} value={enteredSearch} onChange={(e)=>setEnteredSearch(e.target.value)} className='bg-blue-500 px-2 py-1 rounded-tr-md rounded-br-md text-white disabled:bg-gray-300'>검색</button>
    </form>
  )
}

export default Search