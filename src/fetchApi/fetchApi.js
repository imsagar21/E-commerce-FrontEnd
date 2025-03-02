import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetProducts = createAsyncThunk("fetchGetProducts",async()=>{
    const responseApi = await fetch("https://fakestoreapi.in/api/products");
    try{
      if (!responseApi) {
        throw new Error("Failed to fetch products");
      }
      const result = await responseApi.json();
      return result;
    } catch(error){
      throw error
    }
  })

  export const fetchProductDetails = createAsyncThunk(
    "fetchProductDetails",
    async (getParamId) => {
      const responseApi = await fetch(
        `https://fakestoreapi.in/api/products/${getParamId}`
      );
  
      try {
        if (!responseApi) {
          throw new Error("Failed to fetch product Details");
        }
        const result = await responseApi.json();
        return result;
      } catch (error) {
        throw error;
      }
    }
  );