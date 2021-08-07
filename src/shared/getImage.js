import config from '../services/config.json'

export const getImage =(p)=>{
  return `${config.apiEndpoint}/${p}`
  }