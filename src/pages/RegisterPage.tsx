import { Link } from "react-router-dom";
import React from "react";
import { SignUp } from "../ui/SignUp";

export const RegisterPage = () => {
  return (
    <>
      <SignUp />
      <Link to="/login"> to Login Page</Link>
    </>
  );
};
