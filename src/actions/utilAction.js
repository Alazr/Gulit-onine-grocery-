

export const utilPageNum = (page) => {
    return{
        type:"Update_PageNum",
    payload:{
        pageNum:page
    }
}
}


export const utilFiltName = (name) => {
    return{
        type:"Update_filter",
    payload:{
        filt:name
    }
}
}
export const utilFiltLength = (val) => {
    return{
        type:"Update_filtlength",
    payload:{
        filtLength:val
    }
}
}

export const utilSearch = (value) => {
    
    return{
        type:"Update_search",
    payload:{
        searchValue:value
    }
}
}

export const utilSort = (value) => {
    
    return{
        type:"Update_sortby",
    payload:{
        sortby:value

    }
}
}


