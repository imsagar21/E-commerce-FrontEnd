import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../pages/FireBase";

const initialState = {
  loginFormData: {
    email: "",
    password: "",
  },
  registerFormData: {
    name: "",
    email: "",
    password: "",
  },
  user: null,
  isLoggedIn: null,
};
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleOnChange: (state, action) => {
      const { formType, field, value } = action.payload;
      state[formType][field] = value;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
});

export const { handleOnChange, setUser } = LoginSlice.actions;
export const checkAuthState = () => (dispatch) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      dispatch(setUser(JSON.parse(JSON.stringify(currentUser))));
    } else {
      dispatch(setUser(null));
    }
  });
};
export default LoginSlice.reducer;
