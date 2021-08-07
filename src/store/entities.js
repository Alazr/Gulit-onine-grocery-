import { combineReducers } from "redux";
import cartReducer from '../store/cart'
import productReducer from '../store/product'
import categoryReducer from '../store/category'


const entityReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer
})

export default entityReducer