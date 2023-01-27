import React from "react";

import "../assets/css/utilis.css";
import CentChemPage from "./CentChemPage";

function PasteSmile() {
  const mystyle = {
    padding: "20px",
    position: "static",
  };
  return (
    <div>
      <div>
        <CentChemPage />
      </div>
      <div style={mystyle}>
        <h5> PasteSmilehere</h5>
        <div className="d-flex">
          <input className="form-control mr-1" />
          <button className="btn btn-primary">Example</button>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default PasteSmile;
