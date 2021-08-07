import { combineReducers } from 'redux'
import entityReducer from './entities'
import uiReducer from './ul'
import authReducer from './auth'

const rootReducer = combineReducers({
    entities: entityReducer,
    ui: uiReducer,
    auth:authReducer
})

export default rootReducer;