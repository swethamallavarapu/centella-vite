import React from "react";
import "./App.css";
import AuthPage from "./pages/Authpage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CentChem from "./pages/CentChem";
import Opt from "./pages/Opt";
import Select from "./pages/Select";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="AuthPage" element={<AuthPage />} />
            <Route path="CentChem" element={<CentChem />} />
            <Route path="Opt" element={<Opt />} />
            <Route path="Select" element={<Select />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
