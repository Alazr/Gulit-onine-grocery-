import { createSlice } from '@reduxjs/toolkit'
import {apiCallBegan,apiCallFailed,apiCallSuccess} from '../store/apiActions'
const slice = createSlice({
    name: "Products",
    initialState: {
        list: [],
        loading:true,
        productDetail: {},
        detailLoading: true
    },
    reducers: {
        productReceived: (products, action) => {
            // console.log(action.payload.data)
            products.list = action.payload.data
            products.loading = false
        },
        productRequested:(products,action)=>{
            products.loading = true
        },
        detailRequested: (products, action) => {
            products.detailLoading = true
        },
        detailReceived: (products, action) => {
            products.productDetail = action.payload.data
            products.detailLoading = false
        }
    }
})

const { productReceived, detailReceived, detailRequested ,productRequested} = slice.actions

export default slice.reducer


export const loadProducts = () =>(
    apiCallBegan({
        onSuccess:productReceived.type,
        onError:apiCallFailed.type,
        onStart:productRequested.type,
        request:"getProducts"
    }))
export const loadDetail = (id) =>(
    apiCallBegan({
        onSuccess:detailReceived.type,
        onError:apiCallFailed.type,
        onStart:detailRequested.type,
        data:id,
        request:"getDetail"
    }))