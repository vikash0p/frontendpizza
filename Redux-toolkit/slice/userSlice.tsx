import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserDetails} from '@/types/interface'

interface initialStateProps{
    user:UserDetails |null,

}

const initialState :initialStateProps ={
    user:null,


}


const userSlice =createSlice({
    name:"user",
    initialState: initialState,
    reducers:{
        getUser:(state,action:PayloadAction<UserDetails> )=>{
            state.user=action.payload

        },
        logoutUser:(state)=>{
            state.user=null

        }



    }
})
export const {getUser,logoutUser}=userSlice.actions

export default userSlice.reducer
