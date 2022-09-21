import React, { useState } from 'react'
import {BiSearchAlt} from "react-icons/bi"
const Search = () => {
  const [enteredSearch, setEnteredSearch] = useState('')
  const searchHandler = (e) => {
    e.preventDefault()
    console.log('enteredSearch', enteredSearch)
  }
  return (
    <form action="" method="get" className='flex items-center rounded-md bg-white' onSubmit={searchHandler} >
      <label className='flex items-center px-2'>
        <BiSearchAlt className='fill-gray-500'/>
        <input type="text" className='bg-transparent outline-none ml-2'/>
      </label>
      <button disabled={enteredSearch} value={enteredSearch} onChange={(e)=>setEnteredSearch(e.target.value)} className='bg-blue-500 px-2 py-1 rounded-tr-md rounded-br-md text-white disabled:bg-gray-300'>검색</button>
    </form>
  )
}

export default Search