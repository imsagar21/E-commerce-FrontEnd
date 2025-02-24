import React, { useContext, useEffect, useState } from "react";
import CommonForm from "../components/forms/CommonForm";
import { LogininputData } from "../components/forms/FormDetails";
import { AuthContext } from "../context/AuthContext";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "./FireBase";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const { loginFormData, setLoginFormData, handleLoginWithFireBase } =
    useContext(AuthContext);
    const navigate = useNavigate()
    
    function handleLoginForm(e){
        e.preventDefault()
        handleLoginWithFireBase().then((res)=>{
            if(res.user){
                updateProfile(res.user,{
                    displayName:loginFormData.name
                })
            }
        }
        ).catch((error)=>console.log(error)
        )
        navigate('/')
    }
   
  return (
    <div className="max-w-md mx-auto text-center mt-50">
      <CommonForm
        formControls={LogininputData}
        formData={loginFormData}
        setFormData={setLoginFormData}
        onSubmit={handleLoginForm}
        buttonText="Login"
      />
    </div>
  );
};

export default LoginPage;
