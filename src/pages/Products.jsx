import React, { useContext } from "react";
import { ECommerceContext } from "../context/Context";
import ProductTile from "../components/ProductTile";

const Products = () => {
  const { products } = useContext(ECommerceContext);

  return (
    <div className="mt-10 px-20">
      <h1 className="text-4xl font-bold max-w-xs mx-auto text-gray-900 border-b text-center ">
        Products List
      </h1>
      <div className="flex mt-10">
        <div className="flex w-[15%] border">
                FilterSection
        </div>
        <div className="w-[85%] grid grid-cols-4 px-10 border ">
          {products.map((item, index) => (
            <ProductTile singleProductItem={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
