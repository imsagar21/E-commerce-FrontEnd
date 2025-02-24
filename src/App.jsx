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
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
        <Route element={<PrivateRoutes/>}>
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
