import axios from "axios";


export const getAccounts = async() => {
  const res = await axios("/accounts")
  console.log(res)
}