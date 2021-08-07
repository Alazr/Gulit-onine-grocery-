import { createSlice } from '@reduxjs/toolkit'
const init = JSON.parse(localStorage.getItem("cart"))
const slice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        itemAdded: (cart, action) => {
            const { id, item } = action.payload
            cart[id] = { ...item, qua: 1 }
            
        },
        itemRemoved: (cart, action) => {
            delete cart[action.payload.id]
        },
        itemQuantityInc: (cart, action) => {
            const id = action.payload
            cart[id].qua++
        },
        itemQuantityDec: (cart, action) => {
            const id = action.payload
            cart[id].qua--
        },
        itemCleared: (cart, action) => {
            Object.keys(cart).forEach(key => delete cart[key])
        }
    }

})

export const { itemRemoved, itemCleared, itemAdded, itemQuantityDec, itemQuantityInc } = slice.actions

export default slice.reducer