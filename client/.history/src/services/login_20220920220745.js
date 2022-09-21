import http from "../utils/http-common"

export const login = (email, password)=>{
  http.post("/login",{
    email,
    password
  })
}