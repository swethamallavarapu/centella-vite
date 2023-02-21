import React from "react";

import "../assets/css/utilis.css";
import CentChemPage from "./CentChemPage";
import { useNavigate } from "react-router-dom";

function PasteSmile() {
  const mystyle = {
    padding: "20px",
    position: "static",
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `PasteSmileComparision`;
    navigate(path);
  };
  function exampleSmile() {
    window.document.getElementById("smile_inp").value =
      "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O";
  }
  return (
    <div>
      <div>
        <CentChemPage />
      </div>
      <div style={mystyle}>
        <h5> PasteSmilehere</h5>
        <div className="d-flex">
          <input className="form-control mr-1" id="smile_inp" />
          <button className="btn btn-primary" onClick={exampleSmile}>
            Example
          </button>
          <button className="btn btn-primary" onClick={routeChange}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default PasteSmile;
