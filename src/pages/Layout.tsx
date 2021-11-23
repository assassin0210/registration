import { Header } from "../ui/Header";
import { Outlet } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import React from "react";

export const Layout = () => {
  return (
    <>
      <Header />
      <StartPage />
      <Outlet />
    </>
  );
};
