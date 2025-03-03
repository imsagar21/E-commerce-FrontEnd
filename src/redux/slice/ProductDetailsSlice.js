// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// // export const fetchProductDetails = createAsyncThunk(
// //   "fetchProductDetails",
// //   async (getParamId) => {
// //     const responseApi = await fetch(
// //       `https://fakestoreapi.in/api/products/${getParamId}`
// //     );

// //     try {
// //       if (!responseApi) {
// //         throw new Error("Failed to fetch product Details");
// //       }
// //       const result = await responseApi.json();
// //       return result;
// //     } catch (error) {
// //       throw error;
// //     }
// //   }
// // );

// const initialState = {
//   isLoading: false,
//   data: [],
//   isError: false,
//   errorMessage: "",
// };
// export const ProductDetailsSlice = createSlice({
//   name: "productDetails",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProductDetails.pending, (state, action) => {
//       state.isLoading = true;
//       state.isError = false;
//       state.errorMessage = "";
//     });
//     builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload.product;
//     });
//     builder.addCase(fetchProductDetails.rejected, (state, action) => {
//       state.isError = true;
//       (state.isLoading = false), (state.errorMessage = action.errorMessage);
//     });
//   },
  

// });

// export default ProductDetailsSlice.reducer;
