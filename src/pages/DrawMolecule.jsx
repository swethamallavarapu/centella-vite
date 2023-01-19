import React from "react";
import "../assets/css/utilis.css";
import CentChemPage from "./CentChemPage";
import { Paper } from "@mui/material";
// import Side from "../components/DrawMolecule/Side";

function DrawMolecule() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("You clicked submit.");
  // }
  return (
    <div>
      <div>
        <CentChemPage />
      </div>
      <div class="container">
        <h5> Draw Molecule</h5>
        <div class="d-flex">
          <input class="form-control mr-1" />
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
      <Paper></Paper>
    </div>
  );
}
export default DrawMolecule;
