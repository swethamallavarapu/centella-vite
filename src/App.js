import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavLayout from "./layouts/NavLayout";

import AuthPage from "./pages/AuthPage";
import CentChemPage from "./pages/CentChemPage";
import CentRepurposePage from "./pages/CentRepurposePage";
import DashboardPage from "./pages/DasboardPage";
import LandingPage from "./pages/LandingPage";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/Landing" element={<LandingPage />} />
          <Route element={<NavLayout />}>
            <Route path="/Dashboard" element={<DashboardPage />} />
            <Route path="/Centchem" element={<CentChemPage />} />
            <Route path="/CentRepurpose" element={<CentRepurposePage />} />
          </Route>
        </Routes>
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

export default App;
