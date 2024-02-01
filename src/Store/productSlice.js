import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {data:[]};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProduct:(state,action)=>{
         state.data=action.payload
    }
    
  },
});

export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;

export  function getProducts() {
    return async function getProductsThunk(dispatch,getState){
         const data= await fetch('https://fakestoreapi.com/products')
         const result = await data.json();
         dispatch(fetchProduct(result));
    }
    
}