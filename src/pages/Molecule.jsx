import React from "react";
import Sidebar from "../components/Auth/Sidebar";
import Topbar from "../components/Auth/Topbar";
import Chip from "@mui/material/Chip";
import "../assets/css/Select.css";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Toolbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const Molecule = () => {
  const [AdmetPrediction] = React.useState("");
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="select">
        <Chip label="Admet Prediction" onClick={handleClick} />
        <Chip label="Retro Synthesis" onClick={handleClick} />
        <Chip label="DeNovoDesign" onClick={handleClick} />
        <Chip label="Virtual Screening" onClick={handleClick} />
      </div>
      <div className="Text">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};
export default Molecule;
