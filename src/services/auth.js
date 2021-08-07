import config from './config.json'
import http from './httpServices'
import jwtDecode from 'jwt-decode'

const authBase = `${config.apiEndpoint}/auth`

async function login(user){
    const {data} = await http.post(authBase,user)
    localStorage.setItem("token",data)
  

} 

const loginWithJwt = (jwt)=>{
    localStorage.setItem("token",jwt)

}

const currentUser = (jwt)=>{
    const user = jwtDecode(jwt)
    return user
}

export default {
    login,
    loginWithJwt,
    currentUser
}