import { Link } from "react-router-dom";
import React from "react";
import { Login } from "../ui/Login";

export const LoginPage = () => {
  return (
    <>
      <Login />
      <Link to="/register"> to Register Page</Link>
    </>
  );
};
