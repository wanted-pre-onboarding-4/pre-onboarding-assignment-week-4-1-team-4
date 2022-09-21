import http from "../utils/http-common"

/** 이메일, 비밀번호**/
export const login = (email, password)=>{
  http.post("/login",{
    email,
    password
  })
}