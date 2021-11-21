import React from "react";
import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

interface IPropType {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IPropType) => {
  const { auth } = useAuth();
  if (!auth) {
    return <Navigate to="/start-page" replace />;
  }

  return children;
};
