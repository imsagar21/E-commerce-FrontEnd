import { createSlice, isFulfilled } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleAddCartButton: (state, action) => {
      const getProductDetails = action.payload;
      let dublicateCart = [...state.cartItems];
      const indexOfDuplicateCartItem = dublicateCart.findIndex(
        (item) => item.id === getProductDetails.id
      );
      if (indexOfDuplicateCartItem === -1) {
        dublicateCart.push({
          ...getProductDetails,
          quantity: 1,
          totalPrice: getProductDetails.price,
        });
      } else {
        dublicateCart[indexOfDuplicateCartItem] = {
          ...dublicateCart[indexOfDuplicateCartItem],
          quantity: dublicateCart[indexOfDuplicateCartItem].quantity + 1,
          totalPrice:
            (dublicateCart[indexOfDuplicateCartItem].quantity + 1) *
            dublicateCart[indexOfDuplicateCartItem].price,
        };
      }
      state.cartItems = dublicateCart
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    handleAddButton: (state, action) => {
        const getProductDetails = action.payload;
      let dublicateCart = [...state.cartItems];
      const indexOfDuplicateCartItem = dublicateCart.findIndex(
        (item) => item.id === getProductDetails.id
      );
      if (indexOfDuplicateCartItem === -1) {
        dublicateCart.push({
          ...getProductDetails,
          quantity: 1,
          totalPrice: getProductDetails.price,
        });
      } else {
        dublicateCart[indexOfDuplicateCartItem] = {
          ...dublicateCart[indexOfDuplicateCartItem],
          quantity: dublicateCart[indexOfDuplicateCartItem].quantity + 1,
          totalPrice:
            (dublicateCart[indexOfDuplicateCartItem].quantity + 1) *
            dublicateCart[indexOfDuplicateCartItem].price,
        };
      }
      state.cartItems = dublicateCart
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        
    },
    handleRemoveButton:(state,action)=>{
       const getCartItem = action.payload.getCartItem
        const isFullyRemove = action.payload.isFullyRemove
            let dublicateCart = [...state.cartItems];
    const indexOfDuplicateCartItem = dublicateCart.findIndex(
      (item) => item.id === getCartItem.id
    );
    if (isFullyRemove) {
      dublicateCart.splice(indexOfDuplicateCartItem, 1);
    } else {
      dublicateCart[indexOfDuplicateCartItem] = {
        ...dublicateCart[indexOfDuplicateCartItem],
        quantity: dublicateCart[indexOfDuplicateCartItem].quantity - 1,
        totalPrice:
          (dublicateCart[indexOfDuplicateCartItem].quantity - 1) *
          dublicateCart[indexOfDuplicateCartItem].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(dublicateCart));
    state.cartItems = dublicateCart
            
    }
  },
});

export const { handleAddCartButton,handleAddButton,handleRemoveButton } = CartSlice.actions;
export default CartSlice.reducer;
