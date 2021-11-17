import React from "react";
import { GlobalStyle } from "./styled/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound";
import { StartPage } from "./pages/StartPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/main" element={<HomePage />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
