import React from "react";
import { GlobalStyle } from "./styled/GlobalStyle";
import { NotFound } from "./pages/NotFound";
import { RequireAuth } from "./hoc/RequireAuth";
import { useAuth } from "./hooks/use-auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Modal } from "./ui/components/Modal";
import styled from "styled-components";

function App() {
  const { auth } = useAuth();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={auth ? <Navigate replace to="/best-movie" /> : <Layout />}>
          <Route path="login" element={<Modal modalType="login" />} />
          <Route path="registration" element={<Modal modalType="registration" />} />
        </Route>
        <Route
          path="/best-movie"
          element={
            <RequireAuth>
              <div>1</div>
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

const BackGround = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9998;
  background-color: rgba(255, 255, 255, 0.55);
`;

const Test = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color: white;
  z-index: 9999;
`;

export default App;
