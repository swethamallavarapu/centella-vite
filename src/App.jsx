import React from "react";
import "./App.css";
import AuthPage from "./pages/Authpage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CentChem from "./pages/CentChem";
import Admet from "./pages/Admet";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="AuthPage" element={<AuthPage />} />
            <Route path="CentChem" element={<CentChem />} />
            <Route path="Admet" element={<Admet />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
