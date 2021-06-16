const initstate = {
    pageNum:1 ,
    perPage:9,
    filter:"",
    searchValue:"",
    sortby:{
        path:"name",
        ord:"asc"
    },
    filtLength:0
}


const UtilReducer = (state=initstate,action) =>{
    switch (action.type) {
        case "Update_PageNum":
            return {
                ...state,
                pageNum:action.payload.pageNum
            }
        case "Update_filter":
            return{
                ...state,
                filter:action.payload.filt,
                pageNum:1
            }
        case "Update_search":
            return{
                ...state,
                searchValue:action.payload.searchValue,
                filter:"",
                pageNum:1
            }
        case "Update_sortby":
            return{
                ...state,
                sortby:{
                    path:action.payload.sortby[0],
                    ord:action.payload.sortby[1],
                }
            }
        case "Update_filtlength":
            return{
                ...state,
                filtLength:action.payload.filtLength
             
            }
        default:
            return state;
    }
}


export default UtilReducer;