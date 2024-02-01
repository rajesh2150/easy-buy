import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './createSlice'
const storeCart = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default storeCart;