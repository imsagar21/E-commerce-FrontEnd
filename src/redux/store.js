import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSlice"
import cartReducer from "./slice/CartSlice"
import LoginReducer from  "./slice/LoginSlice"
export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        login:LoginReducer

    }
})