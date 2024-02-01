import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {data:[],status:'idle'};
const productSlice = createSlice({
  name: "products",
  initialState,
//   reducers: {
//     fetchProduct:(state,action)=>{
//          state.data=action.payload
//     }
//   },
  extraReducers:(build)=>{
    build
    .addCase(getProducts.pending,(state,action)=>{
        state.status='Loading'
    })
    .addCase(getProducts.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.status='idle'
    })
    .addCase(getProducts.rejected,(state,action)=>{
        state.status='Failed'
    })

  }
});

export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;

// export  function getProducts() {
//     return async function getProductsThunk(dispatch,getState){
//          const data= await fetch('https://fakestoreapi.com/products')
//          const result = await data.json();
//          dispatch(fetchProduct(result));
//     }
    
// }

export const getProducts = createAsyncThunk('products/get',async ()=>{
    const data= await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result
    
} )