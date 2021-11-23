import React from "react";
import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

interface IPropType {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IPropType) => {
  const { auth } = useAuth();
  console.log(auth);
  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
