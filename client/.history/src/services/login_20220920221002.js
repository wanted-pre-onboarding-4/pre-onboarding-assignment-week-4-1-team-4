import http from "../utils/http-common"

/** 이메일, 비밀번호를 인자값으로 받음*/
export const login = (email, password)=>{
  http.post("/login",{
    email,
    password
  })
}