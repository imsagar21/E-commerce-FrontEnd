import React, { useEffect } from "react";
import formatPrice from "../Utils/formatPrice";
import { useDispatch } from "react-redux";
import { handleAddButton, handleRemoveButton } from "../redux/slice/CartSlice";

const CartTile = ({ singleCartItem }) => {
  const dispatch = useDispatch()
  function handleCartButton(getCartItem){
      dispatch(handleAddButton(getCartItem))
  }
  function handleRemoveCartItem(getCartItem,isFullyRemove){
    dispatch(handleRemoveButton({getCartItem,isFullyRemove}))
  }
    useEffect(()=>{
      JSON.parse(localStorage.getItem("cartItems")) || []
    },[])
  return (
    <div className="flex border p-4 items-center mt-2 rounded-md w-[700px]">
    {/* Image */}
    <img 
      src={singleCartItem.image} 
      alt="Product" 
      className="w-32 h-32 object-cover rounded"
    />
  
    {/* Product Details */}
    <div className="ml-4 flex-1">
      <h2 className="text-lg font-semibold">{singleCartItem.title}</h2>
      <p className="text-lg font-semibold">{formatPrice(singleCartItem.totalPrice)}</p>
      <p className="text-sm">Qty: {singleCartItem.quantity}</p>
  
      {/* Quantity Controls */}
      <div className="flex items-center space-x-2 mt-2">
        <button
        onClick={()=>handleRemoveCartItem(singleCartItem,false)}
        disabled={singleCartItem?.quantity===1}
         className="px-2 py-1 bg-black text-white rounded cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed">-</button>
        <span className="px-2 py-1 text-xl">{singleCartItem.quantity}</span>
        <button onClick={()=>handleCartButton(singleCartItem)} className="px-2 py-1 bg-black text-white rounded cursor-pointer">+</button>
      </div>
    </div>
  
    {/* Remove Button */}
    <button 
     onClick={()=>handleRemoveCartItem(singleCartItem,true)}
    className="ml-auto bg-black text-white px-4 py-2 rounded cursor-pointer">
      Remove
    </button>
  </div>
  )
}

export default CartTile;
