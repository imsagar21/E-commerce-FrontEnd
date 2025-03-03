import CommonForm from "../components/forms/CommonForm";
import { LogininputData } from "../components/forms/FormDetails";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./FireBase";

const LoginPage = () => {
  const loginFormData = useSelector((state) => state.login.loginFormData);
  const navigate = useNavigate();

  function handleLoginWithFireBase() {
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleLoginForm(e) {
    e.preventDefault();
    handleLoginWithFireBase().then((res) => {
      console.log("user Logged In Successfully", res);
      if (res) {
        navigate("/");
      } else {
        console.log("Login Failed");
      }
    });
  }

  return (
    <div className="max-w-md mx-auto text-center mt-50">
      <CommonForm
        formControls={LogininputData}
        formData={loginFormData}
        onSubmit={handleLoginForm}
        buttonText="Login"
        formType="loginFormData"
      />
    </div>
  );
};

export default LoginPage;
