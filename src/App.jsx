import React from "react";
import "./App.css";
import AuthPage from "./pages/Authpage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CentChem from "./pages/CentChem";
import Opt from "./pages/Opt";
import Choose from "./pages/Choose";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="AuthPage" element={<AuthPage />} />
            <Route path="CentChem" element={<CentChem />} />
            <Route path="Opt" element={<Opt />} />
            <Route path="Choose" element={<Choose />} />
            <Route path="Dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
