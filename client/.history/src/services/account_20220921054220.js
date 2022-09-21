import axios from "axios";


export const getAccounts = async() => {
  const res = await axios.get("/accounts",{
    
  })
  console.log(res)
}