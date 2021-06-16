import http from './httpServices'
import config from './config.json'

const productsEndPoint = `${config.apiEndpoint}/api/products`
const categotyEndPoint = `${config.apiEndpoint}/api/categories`

const getProducts = () =>{
    return http.get(productsEndPoint)
}

const getCategory = () =>{
    return http.get(categotyEndPoint)
}

const getProductDetail = (id) =>{
    return http.get(`${productsEndPoint}/${id}`)
}


export default {
    getProducts,
    getCategory,
    getProductDetail
}