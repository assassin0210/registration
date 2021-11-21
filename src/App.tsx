import React from "react";
import { GlobalStyle } from "./styled/GlobalStyle";
import { Route, Routes } from "react-router-dom";

import { NotFound } from "./pages/NotFound";
import { StartPage } from "./pages/StartPage/StartPage";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/start-page" element={<StartPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <div>123123</div>
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
