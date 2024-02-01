import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './createSlice';
import productSlice from "./productSlice";


const storeCart = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    }
})

export default storeCart;