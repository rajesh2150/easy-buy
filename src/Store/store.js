import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './createSlice';
import productSlice from "./productSlice";
import orderSlice from "./orderSlice";


const storeCart = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice,
        orders:orderSlice
    }
})

export default storeCart;