import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import authStore from '../store/AuthStore';

const Header = () => {
  const [userProfile, setUserProfil] = useState([])
  
  const {id} = authStore()

  useEffect(()=>{
    const getUserProfile = async()=>{
        const res = await userProfile(id)
        setUserProfil(res.data)
        console.log(res)
    }
    getUserProfile()
  },[])

  return (
    <header className='bg-white py-6 px-4 border-b-[1px]'>헤더</header>
    )
};

export default Header;
