import http from "../utils/http-common"

/** 이메일, 비밀번호를 인자값으로 받음*/
export const login = async(email, password)=>{
  try{
    const res = await http.post("/login",{
      email,
      password
    })
    console.log(res)

  }catch(err){
    console.log(err)
  }
  
}