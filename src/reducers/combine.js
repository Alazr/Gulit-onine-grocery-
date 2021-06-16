import {combineReducers} from 'redux'
import ProducReducer from './productsReducer'
import UtilReducer from './utilsReducer'


export const rootReducer = combineReducers({
    products:ProducReducer,
    utils:UtilReducer
})