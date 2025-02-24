import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Navbar = () => {
  return (
    <div className="flex justify-between py-2 items-center px-20  bg-gray-400">
      <div>
        <img />
        <div className="flex gap-5  text-lg">
          <Link
            className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold"
            to={"/cart"}
          >
            Cart
          </Link>
        </div>
      </div>
      <div className="flex gap-5  text-lg ">
        <Link className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold"
              to={"/login"}>

          Login
        </Link>
        <Link 
        to={"/register"} className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
