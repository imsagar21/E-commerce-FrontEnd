import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import formatPrice from "../Utils/formatPrice";
import { useDispatch, useSelector } from "react-redux";
import { handleAddCartButton } from "../redux/slice/CartSlice";
import { fetchProductDetails } from "../fetchApi/fetchApi";

const ProductDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const paramId = Number(id);
const dispatch = useDispatch()
const productDetails = useSelector((state=>state.products.productDetailsData))

function handleCartButton(productDetails){
  dispatch(handleAddCartButton(productDetails))
  navigate("/cart")
}
  useEffect(() => {
    dispatch(fetchProductDetails(paramId));
  }, [dispatch]);

  return (
    <div className="flex gap-10 mt-30 px-20">
      <div className="w-[50%]">
        <img
          src={productDetails.image}
          className="w-[500px] h-[400px] object-cover"
        />
      </div>
      <div className="w-full">
        <p className="font-semibold text-lg py-3">{productDetails.title} </p>
        <p>
          <span className="font-semibold py-3">Model :</span>
          {productDetails.model}
        </p>
        <p className="py-3 font-semibold">
          {formatPrice(productDetails.price)}
        </p>
        <p className="font-light ">{productDetails.description}</p>
        <button
          onClick={() => handleCartButton(productDetails)}
          className="text-center font-semibold text-2xl  cursor-pointer w-[300px]  bg-gray-900 text-white py-2 mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
