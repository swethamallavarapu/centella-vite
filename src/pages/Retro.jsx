import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../assets/css/Retro.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { ButtonGroup } from "@mui/material";

const Retro = () => {
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
      <Card className="card" sx={{ Width: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            RETROSYNTASIS PREDICTION
          </Typography>
        </CardContent>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={OnChange}
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
              <TextField
                id="standard-basic"
                variant="standard"
                label="Add Project Name"
              />
            </FormControlLabel>
          </RadioGroup>
        </FormControl>
        <div className="">
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
        </div>
        <CardActions>
          <ButtonGroup
            variant="contained"
            aria-label="outlined grey button group"
          >
            <Button Width="large">CANCEL</Button>
            <Button size="small">PREDICT RETROSYNTASIS</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  );
};
export default Retro;
