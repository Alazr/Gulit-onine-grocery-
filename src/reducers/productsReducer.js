const cartInitial = JSON.parse(localStorage.getItem("cart"))  

const initial = {
    Products:[],
    cart:cartInitial,
    category:[],
    detail:{},
    detailIsLoading:true
}


const ProducReducer = (state=initial,action) =>{
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {...state,
                Products:action.payload.products,
                category:action.payload.category

            }
        case "Fetch_Detail":
            return {...state,
               detail:action.payload.detail,
               detailIsLoading:false
            }
        case "Detail_isloading":
            return {...state,
                detailIsLoading:true
            }
        case "cart/itemAdded":
            return{
                ...state,
                cart:[...state.cart,{...action.payload,qua:1}]
            }
        case "cart/itemRemoved":
            return{
                ...state,
                cart:state.cart.filter(item=>item.id !== action.payload)
            }
        case "cart/ClearAll":
            return{
                ...state,
                cart:[]
            }
        case "Change_Quantity":
            return{
                ...state,
                cart:action.payload
            }
        default:
            return state
    }
}

export default ProducReducer