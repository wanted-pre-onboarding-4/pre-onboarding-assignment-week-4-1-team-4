import React, { useEffect } from 'react'
import storage from '../utils/storage'

const Header = () => {
  useEffect(()=>{
    console.log(storage.get())
  },[])
  return (
    <div>Header</div>
  )
}

export default Header