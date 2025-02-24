import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../pages/FireBase";

export const AuthContext = createContext(null);

function AuthState({ children }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  function handleLoginWithFireBase() {
    const { email, password } = loginFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      checkAuthState();
    };
  }, []);
  console.log(user, "users");

  return (
    <AuthContext.Provider
      value={{ loginFormData, setLoginFormData, handleLoginWithFireBase,user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;
