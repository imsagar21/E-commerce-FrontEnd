import React, { useContext } from "react";
import { RegisterinputData } from "../components/forms/FormDetails";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CommonForm from "../components/forms/CommonForm";
import { updateProfile } from "firebase/auth";
import auth from "./FireBase";

const RegisterPage = () => {
  const { registerFormData, setRegisterFormData, handleRegisterWithFireBase } =
    useContext(AuthContext);
  const navigate = useNavigate();
  function handleRegisterForm(e) {
    e.preventDefault();
    handleRegisterWithFireBase()
      .then((res) => {
        updateProfile(res.user, {
          displayName: registerFormData.name,
        }).then(() => {
          console.log(auth.currentUser.displayName);

          if(auth.currentUser.displayName){
            navigate('/login')
          }
          
        })
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="max-w-md mx-auto text-center mt-50">
      <CommonForm
        formControls={RegisterinputData}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        onSubmit={handleRegisterForm}
        buttonText="Register"
      />
    </div>
  );
};

export default RegisterPage;
