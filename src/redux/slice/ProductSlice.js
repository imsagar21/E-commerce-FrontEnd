import {  createSlice } from "@reduxjs/toolkit";
import { fetchGetProducts, fetchProductDetails } from "../../fetchApi/fetchApi";

const initialState = {
    isLoading : false,
    productData:[],
    productDetailsData:[],
    isError:false,
    errorMessage :'',
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],

};
export const ProductSlice = createSlice({
  name: "products",
  initialState,
  extraReducers:(builder)=>{
    builder
    .addCase(fetchGetProducts.pending, (state,action)=>{
      state.isLoading=true
      state.isError=false
      state.errorMessage=''

    })
    .addCase(fetchGetProducts.fulfilled,(state,action)=>{
      state.isLoading=false
      state.productData = action.payload.products
    })
    .addCase(fetchGetProducts.rejected,(state,action)=>{
      state.isError=true
      state.isLoading=false,
      state.errorMessage=action.error.message
    })
    .addCase(fetchProductDetails.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    })
    .addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetailsData = action.payload.product;
    })
    .addCase(fetchProductDetails.rejected, (state, action) => {
      state.isError = true;
      (state.isLoading = false), (state.errorMessage = action.errorMessage);
    });
  },
});


export default ProductSlice.reducer
