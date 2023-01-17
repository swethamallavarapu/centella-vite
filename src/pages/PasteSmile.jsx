import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "../assets/css/utilis.css";
import CentChemPage from "./CentChemPage";
// import { FormGroup } from "@mui/material";
// import InputGroup from "react-bootstrap/InputGroup";
function PasteSmile() {
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log("You clicked submit.");
  //   }
  return (
    <div>
      <div>
        <CentChemPage />
      </div>
      <div class="container">
        <h5> PasteSmilehere</h5>
        <div class="d-flex">
          <input class="form-control mr-1" />
          <button class="btn btn-primary">Example</button>
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default PasteSmile;
