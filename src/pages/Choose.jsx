import React from "react";
import Sidebar from "../components/Auth/Sidebar";
import Topbar from "../components/Auth/Topbar";
import Chip from "@mui/material/Chip";
import "..//assets/css/Select.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Choose = () => {
  const [AdmetPrediction] = React.useState("");
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleChange = (event) => {
    setAge(event.target.value);
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
        <FormControl sx={{ minWidth: 120, height: "1px" }} size="small">
          <InputLabel id="demo-select-small">Admet Prediction</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            variant="filled"
            borderRadius="theme.shape.borderRadius"
            value={AdmetPrediction}
            label="Admet Prediction"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
export default Choose;
