import React, { useContext, useEffect } from "react";
import { ECommerceContext } from "../context/Context";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productDetails, handleCartButton, setProductDetails } =
    useContext(ECommerceContext);
  const { id } = useParams();
  const paramId = Number(id);

  async function fetchProductDetails(id) {
    const responseApi = await fetch(
      `https://fakestoreapi.in/api/products/${paramId}`
    );
    const result = await responseApi.json();
    try {
      if (result) {
        setProductDetails(result.product);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);
  
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
        <p className="py-3 font-semibold">${productDetails.price}</p>
        <p className="font-light ">{productDetails.description}</p>
        <button
          onClick={()=>handleCartButton(productDetails)}
          className="text-center font-semibold text-2xl  cursor-pointer w-[300px]  bg-gray-900 text-white py-2 mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
