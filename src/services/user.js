import config from './config.json'
import http from './httpServices'

const baseUrl = `${config.apiEndpoint}/api/users`

export const registerUser = (user)=>{
    
    return http.post(baseUrl,user)

}


