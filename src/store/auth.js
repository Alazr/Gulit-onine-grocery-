import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice({
    name:"auth",
    initialState:{
        currentUser:null,
        userToken:""
    },
    reducers:{
        userAdded:(auth,action)=>{
            auth.currentUser = action.payload.user
        },
        tokenAdded:(auth,action)=>{
            auth.userToken = action.payload.jwt    
        },
        userRemoved:(auth,action)=>{
             auth.userToken=""
        }
    }

})


export const {userAdded,tokenAdded,userRemoved} = slice.actions;


export default slice.reducer