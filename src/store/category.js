import { createSlice } from '@reduxjs/toolkit'
import {apiCallBegan,apiCallFailed,apiCallSuccess} from '../store/apiActions'

const slice = createSlice({
    name: "Category",
    initialState: []
    ,
    reducers: {
        categoryReceived: (category, action) => {
            category = action.payload.data
            return category
        }

    }
})

export const { categoryReceived } = slice.actions

export default slice.reducer


export const loadCategory = () =>{
    return apiCallBegan({
        onSuccess:categoryReceived.type,
        onError:apiCallFailed.type,
        request:"getCategory"
    })
}