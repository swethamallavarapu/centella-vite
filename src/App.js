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
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawMolecule from "./pages/DrawMolecule";
import PasteSmile from "./pages/PasteSmile";
import RetroSynthesis from "../src/components/RetroSynthesis";
import Upload from "./components/Upload";
// import NewProject from "./pages/NewProject";
import MyProject from "./pages/MyProject";
import RetroEditor from "./pages/RetroEditor";
import MoleculeComparision from "./components/MoleculeComparision";
import PasteSmileComparision from "./components/Molecule/PasteSmileComparision"
import VisualEditor from "./pages/VisualEditor";

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
            <Route path="/Centchem/?" element={<CentChemPage />} />
            <Route path="/CentRepurpose" element={<CentRepurposePage />} />
            <Route path="/Centchem/DrawMolecule" element = {<DrawMolecule />} />
            <Route path="/Centchem/?/PasteSmile" element = {<PasteSmile />} />
            <Route path="Centchem/RetroSynthesis" element = {<RetroSynthesis />} />
            <Route path="Centchem/Upload" element={<Upload />} />
            {/* <Route path="NewProject" element={<NewProject />} /> */}
            <Route path="/MyProject" element={<MyProject />} />
            <Route path="/Centchem/RetroEditor" element={<RetroEditor/>} />
            <Route path="/Centchem/DrawMolecule/RetroEditor" element={<RetroEditor/>} />
            <Route path="/Centchem/DrawMolecule/MoleculeComparision" element={<MoleculeComparision/>} />
            <Route path="/Centchem/PasteSmile/PasteSmileComparision"  element={<PasteSmileComparision/>} />
            <Route path="/VisualEditor" element={<VisualEditor/>}/> 
          </Route>
        </Routes>
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

export default App;
