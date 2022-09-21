import axios from "axios"
// import storage from "../utils/storage"

/** 이메일, 비밀번호를 인자값으로 받음*/
export const login = async(email, password)=>{
  try{
    const res = await axios.post("/login",{
      "email" : email,
      "password" : password
    })
    return res
  }catch(err){
    window.alert('존재하지 않는 아이디 입니다.')
  }
  
}