import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import EcommerceState from "./context/Context.jsx";
import AuthState from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <AuthState>
    <EcommerceState>
        <App />
    </EcommerceState>
      </AuthState>
  </BrowserRouter>
);
