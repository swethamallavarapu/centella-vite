import Sidebar from "../components/Auth/Sidebar";
import Topbar from "../components/Auth/Topbar";
import Chip from "@mui/material/Chip";
import "..//assets/css/Select.css";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";

const Choose = () => {
  // const [AdmetPrediction] = React.useState("");
  const handleClick = () => {
    console.info("You clicked the Form.");
  };
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const [AdmetPrediction, setAdmetPrediction] = React.useState("");
  const handleChange = (event) => {
    setAdmetPrediction(event.target.value);
  };
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="select">
        {/* <Chip label="Admet Prediction" onClick={handleClick} /> */}
        <FormControl
          sx={{ m: 3, minWidth: 160 }}
          // variant="standard"
          size="small"
          border-radius="25px"
        >
          <InputLabel htmlFor="demo-customized-select-native">
            <Button color="primary">AdmetPrediction</Button>
          </InputLabel>

          <Select
            id="demo-customized-select-native"
            value={AdmetPrediction}
            onChange={handleChange}
          >
            <MenuItem aria-label="None" value="" />
            <MenuItem value={1}>PasteSmile</MenuItem>
            <MenuItem value={2}>DrawMolecule</MenuItem>
            <MenuItem value={3}>UploadFile</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 3, minWidth: 150 }}
          size="small"
          border-radius="25px"
        >
          <InputLabel htmlFor="demo-customized-select-native"></InputLabel>

          <Button variant="outlined">Retro Synthesis</Button>
        </FormControl>
        <FormControl
          sx={{ m: 3, minWidth: 150 }}
          size="small"
          border-radius="25px"
        >
          <InputLabel htmlFor="demo-customized-select-native"></InputLabel>

          <Button variant="outlined">DeNovo Design</Button>
        </FormControl>
        <FormControl
          sx={{ m: 3, minWidth: 150 }}
          size="small"
          border-radius="25px"
          color="grey"
        >
          <InputLabel htmlFor="demo-customized-select-native"></InputLabel>

          <Button variant="outlined">Virtual Screening</Button>
        </FormControl>

        {/* <FormControl
          sx={{ m: 3, minWidth: 150 }}
          // variant="standard"
          size="small"
          border-radius="25px"
        >
          <InputLabel htmlFor="demo-customized-select-native">
            AdmetPrediction
          </InputLabel>
          <Select
            id="demo-customized-select-native"
            value={AdmetPrediction}
            onChange={handleChange}
          >
            <MenuItem aria-label="None" value="" />
            <MenuItem value={1}>PasteSmile</MenuItem>
            <MenuItem value={2}>DrawMolecule</MenuItem>
            <MenuItem value={3}>UploadFile</MenuItem>
          </Select>
        </FormControl> */}
      </div>
    </div>
  );
};
export default Choose;
