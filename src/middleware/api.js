import {apiCallBegan} from '../store/apiActions'
import productServices from '../services/productServices'


const api = ({dispatch,getState}) => next => async action =>{


    if (action.type !== apiCallBegan.type) return next(action)

    const {onSuccess,onError,onStart,request,data} = action.payload

    if (onStart){
        dispatch({
            type:onStart
        })
    }

    let apiRequest;
    if(request === "getProducts")
        apiRequest = productServices.getProducts
    else if(request === "getCategory")
        apiRequest = productServices.getCategory
    else if(request === "getDetail")
        apiRequest = productServices.getProductDetail
        
   try {
    let res;
       if(data){
            res = await apiRequest(data)
        }
            
        else
            res = await apiRequest()
        
    dispatch({
        type:onSuccess,
        payload:{
            data:res.data
        }
    })
   } catch (error) {
    dispatch({
        type:onError,
        payload:error.message
    })
   }
    
}

export default api