import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../pages/FireBase";

export const AuthContext = createContext(null);

function AuthState({ children }) {


  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] =useState(null);
  
  function handleLoginWithFireBase() {
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  }
  function handleRegisterWithFireBase() {
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function handleLogout() {
    return signOut(auth);
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    if(user){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }

    return () => {
      checkAuthState();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginFormData,
        setLoginFormData,
        handleLoginWithFireBase,
        user,
        registerFormData,
        setRegisterFormData,
        handleRegisterWithFireBase,
        handleLogout,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;
