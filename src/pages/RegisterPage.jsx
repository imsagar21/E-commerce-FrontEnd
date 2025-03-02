import React, { useContext } from "react";
import { RegisterinputData } from "../components/forms/FormDetails";
import { useNavigate } from "react-router-dom";
import CommonForm from "../components/forms/CommonForm";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./FireBase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/LoginSlice";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerFormData = useSelector((state) => state.login.registerFormData);

  async function handleRegisterForm(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        registerFormData.email,
        registerFormData.password
      );

      await updateProfile(res.user, {
        displayName: registerFormData.name,
      });
      // ✅ Store only serializable user data in Redux
      const userData = {
        uid: res.user.uid,
        email: res.user.email,
        displayName: registerFormData.name, // Since we updated the profile
        photoURL: res.user.photoURL || null,
      };

      dispatch(setUser(userData));
      console.log("User Registered Successfully", res.user);
      await signOut(auth);
      dispatch(setUser(null));
      navigate("/login");
    } catch (error) {
      console.error("Registration Error", error);
    }
  }

  return (
    <div className="max-w-md mx-auto text-center mt-50">
      <CommonForm
        formControls={RegisterinputData}
        formData={registerFormData}
        onSubmit={handleRegisterForm}
        buttonText="Register"
        formType="registerFormData"
      />
    </div>
  );
};

export default RegisterPage;
