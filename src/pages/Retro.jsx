import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../assets/css/Retro.css";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { CardHeader, Divider } from "@mui/material";

export default function Retro() {
  const [value, setValue] = React.useState("Targetmolecule");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [selectedValue, setSelectedValue] = React.useState("a");

  const OnChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="Style">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Retro Synthesis
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Addtopreexistingproject "
                control={<Radio />}
                label="Add to pre-existing project"
              />
              <FormControlLabel
                value="Addtoabrandnewproject"
                control={<Radio />}
                label="Add to a brand new project"
              >
                {/* <TextField
                  id="standard-basic"
                  variant="standard"
                  label="Add Project Name"
                /> */}
              </FormControlLabel>
            </RadioGroup>
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <u>Start From</u>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Targetmolecule "
                control={<Radio />}
                label="Target molecule"
              />
              <FormControlLabel
                value="Fromfile"
                control={<Radio />}
                label="From file"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="outlined" sx={{ width: 250, padding: 1, margin: 2 }}>
            CANCEL
          </Button>
          <Button variant="outlined" sx={{ width: 250, padding: 1, margin: 2 }}>
            PREDICT RETROSYNTHESIS
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
