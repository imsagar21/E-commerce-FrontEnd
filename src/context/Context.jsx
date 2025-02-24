import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ECommerceContext = createContext(null);

function EcommerceState({ children }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  async function fetchGetProducts() {
    const responseApi = await fetch("https://fakestoreapi.in/api/products");
    const result = await responseApi.json();
    try {
      if (result) {
        setProducts(result?.products);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleCartButton(getProductDetails) {
    let dublicateCart = [...cartItems];
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
    navigate("/cart");
    localStorage.setItem("cartItems", JSON.stringify(dublicateCart));
    setCartItems(dublicateCart);
  }

  function handleRemoveCartItem(getCartItem, isFullyRemove) {
    let dublicateCart = [...cartItems];
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
    setCartItems(dublicateCart);
  }
  useEffect(() => {
    fetchGetProducts();
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, []);

  return (
    <ECommerceContext.Provider
      value={{
        products,
        productDetails,
        setProductDetails,
        handleCartButton,
        cartItems,
        handleRemoveCartItem,
      }}
    >
      {children}
    </ECommerceContext.Provider>
  );
}

export default EcommerceState;
