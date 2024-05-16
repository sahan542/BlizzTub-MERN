import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails : (state,action)=>{
            console.log(action.payload)
        }
    },
})


export const { setUserDetails }