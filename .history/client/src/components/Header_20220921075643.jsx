import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getUser } from '../services/account';
import authStore from '../store/AuthStore';

const Header = () => {
  const [userProfile, setUserProfil] = useState([])
  
  const {id} = authStore()
  const {pathname} = useLocation()

  let pageName = ''
  if(pathname === "/users") pageName =  "유저 목록 페이지" 
  if(/[users/\d]/g.test(pathname)) pageName =  "유저 상세 페이지" 
  if(pathname === "/accounts") pageName = "계좌 목록 페이지"
  if(/[accounts/\d]/g.test(pathname)) pageName = "계좌 상세 페이지"

  useEffect(()=>{
    const getUserProfile = async()=>{
        const res = await getUser(id)
        setUserProfil(res.data)
        console.log(res)
    }
    getUserProfile()
  },[id])

  console.log('userProfile', userProfile)

  return (
    <header className='bg-white py-6 px-4 border-b-[1px]'>
      <p>{pageName}</p>
    </header>
    )
};

export default Header;
