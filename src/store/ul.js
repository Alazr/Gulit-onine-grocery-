import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'Ul',
    initialState: {
        pageNum: 1,
        perPage: 9,
        filter: "",
        searchValue: "",
        sortby: {
            path: "name",
            ord: "asc"
        },
        filtLength: 0,
        isMobile: false
    }, reducers: {
        pageUpdated: (ui, action) => {
            ui.pageNum = action.payload
        },
        filterUpdated: (ui, action) => {
            ui.filter = action.payload
            ui.pageNum = 1
        },
        searchUpdated: (ui, action) => {
            ui.searchValue = action.payload
            ui.filter = ""
            ui.pageNum = 1
        },
        sortByUpdated: (ui, action) => {
            ui.sortby = action.payload
        },
        filteredItemLength: (ui, action) => {
            ui.filtLength = action.payload.length
        },
        mobileChanged: (ui, action) => {
            ui.isMobile = action.payload.value
        }


    }
})

export const { mobileChanged, filterUpdated, filteredItemLength, searchUpdated, sortByUpdated, pageUpdated } = slice.actions


export default slice.reducer