import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import api from '../middleware/api'
import reducer from './combine'

const store = configureStore({reducer,middleware:[...getDefaultMiddleware(),api]})


export default store;