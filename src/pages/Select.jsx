import React from "react";
import Sidebar from "../components/Auth/Sidebar";
import Topbar from "../components/Auth/Topbar";
import Chip from "@mui/material/Chip";
import "..//assets/css/Select.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const Select = () => {
  const [age] = React.useState("");
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
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Age</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
export default Select;
