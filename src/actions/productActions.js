import productServices from '../services/productServices'




export const LoadProducts = () => async (dispatch) =>{
   
    const {data} = await productServices.getProducts()
    const {data:catData} = await productServices.getCategory()
   
    
    dispatch({
        type:"FETCH_PRODUCTS",
        payload:{
            products:data.objects,
            category:catData.objects
        }
    })

}

export const loadDetail = (id) => async (dispatch)=>{

    dispatch({
        type:"Detail_isloading"
    })

    const {data} = await productServices.getProductDetail(id)
    
    
    dispatch({
        type:"Fetch_Detail",
        payload:{
            detail:data
        }
    })
}