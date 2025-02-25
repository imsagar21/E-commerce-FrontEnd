import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const Login = "Login";
  const Logout = "Logout";

  const { user, handleLogout } = useContext(AuthContext);
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
          <Link
            className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold"
            to={"/orders"}
          >
            Orders
          </Link>
        </div>
      </div>
      <div className="flex gap-5  text-lg items-center ">
        {user && (
          <div className="flex gap-2 ">
            <i className="fa-solid fa-circle-user text-3xl cursor-pointer "></i>
            <h1 className=" rounded-md transition-all duration-300 font-bold">{user.displayName}</h1>
          </div>
        )}
        {user ? (
          <Link
            onClick={handleLogout}
            className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold"
          >
            Logout
          </Link>
        ) : (
          <Link
            className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold"
            to={"/login"}
          >
            Login
          </Link>
        )}
        {user ? null : (
          <Link
            to={"/register"}
            className="hover:bg-gray-700 hover:text-gray-300 px-2 rounded-md transition-all duration-300 font-bold"
          >
            SignUp
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
