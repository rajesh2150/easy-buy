import {createSlice,configureStore} from '@reduxjs/toolkit'

const orderSlice=createSlice({
    name:'orders',
    initialState:[],
    reducers:{
        buynow:(state,action)=>{
            state.push(action.payload);
        
        }
    },
})

export default orderSlice.reducer
export const {buynow} = orderSlice.actions