import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getUser } from '../services/account';
import authStore from '../store/AuthStore';

const Header = () => {
  const [userProfile, setUserProfil] = useState([])
  const [pageName, setPageName] = useState('')

  const {id} = authStore()
  const {pathname} = useLocation()

  if(pathname === "/users") setPageName( "유저 목록 페이지" )
  else if(/[users/\d]/g.test(pathname)) setPageName( "유저 상세 페이지" )
  else if(pathname === "/accounts") setPageName("계좌 목록 페이지")
  else if(/[accounts/\d]/g.test(pathname)) setPageName("계좌 상세 페이지")

  useEffect(()=>{
    const getUserProfile = async()=>{
        const res = await getUser(id)
        setUserProfil(res.data)
        console.log(res)
    }
    getUserProfile()
  },[])

  console.log('userProfile', userProfile)

  return (
    <header className='bg-white py-6 px-4 border-b-[1px]'>
      <p>{pageName}</p>
    </header>
    )
};

export default Header;
