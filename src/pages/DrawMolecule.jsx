import { Jsme } from "jsme-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../assets/css/DrawMolecule.css";
import CentchemPage from "./CentChemPage";

export default function App() {
  const [solutestate, setSoluteState] = useState("");

  const { handleSubmit } = useForm({
    defaultValues: {
      solute: "",
      solvent: "",
    },
  });

  return (
    <div>
      <CentchemPage />
      <h4>Draw Molecule</h4>
      <div>
        <div className="style">
          <Jsme
            height="400px"
            width="700px"
            options="oldlook,star"
            onChange={setSoluteState}
          />
        </div>
        <div className="form">
          <h1>{solutestate}</h1>

          <button onSubmit={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
