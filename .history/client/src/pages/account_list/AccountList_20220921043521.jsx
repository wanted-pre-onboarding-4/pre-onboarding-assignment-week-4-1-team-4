import React, { useEffect,  } from 'react'
import { getAccounts } from '../../services/account'

const AccountList = () => {
  // const [accounts, setAccounts] = useState([])

  useEffect(()=>{
    const getAccountList = async()=>{
      const res = await getAccounts()
      console.log('res', res)
    }
    getAccountList()
  },[])

  return (
    <div>AccountList</div>
  )
}

export default AccountList