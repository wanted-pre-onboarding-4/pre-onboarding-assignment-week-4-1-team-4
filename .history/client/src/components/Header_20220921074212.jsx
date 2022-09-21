import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUser } from '../services/account';
import authStore from '../store/AuthStore';

const Header = () => {
  const [userProfile, setUserProfil] = useState([])
  
  const {id} = authStore()

  useEffect(()=>{
    const getUserProfile = async()=>{
        const res = await getUser(id)
        setUserProfil(res.data)
        console.log(res)
    }
    getUserProfile()
    console.log('userProfile', userProfile)
  },[])

  return (
    <header className='bg-white py-6 px-4 border-b-[1px]'>헤더</header>
    )
};

export default Header;
