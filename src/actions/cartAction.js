

export const AddToCart = (item) =>{
    
    return{
        type:"cart/itemAdded",
        payload:item

    }
    
}

export const RemoveFromCart = (id) =>{
    if(id){
        return{
            type:"cart/itemRemoved",
            payload:id
    
        }
    }else{
        return{
            type:"cart/ClearAll"
        }
    }
}

export const changeQuan = (item) =>{    
    return{
        type:"Change_Quantity",
        payload:item

    }
}