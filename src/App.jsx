import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoutes from "./Utils/PrivateRoutes";
import Orders from "./pages/Orders";
import LoginRoutes from "./Utils/LoginRoutes";
import { useDispatch } from "react-redux";
import { checkAuthState } from "./redux/slice/LoginSlice";
import { useEffect } from "react";


function App() {
   const dispatch =  useDispatch()

    useEffect(() => {
      dispatch(checkAuthState())
  
    }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route element={<PrivateRoutes />}>
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route element={<LoginRoutes/>}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
