import { Paper } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "../assets/css/CentChem.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const CentChem = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <div>
      <div className="Cent">
        <Paper
          elevation={4}
          style={{
            width: "30%",
            height: "685px",
            textAlign: "right",
            left: "10%",
          }}
        >
          <Button onClick={onClick}>
            <h2>CentChem</h2>
            <br />
            <p>
              <h6>
                Filler text is text that shares some characteristics of a real
                written text, but is random or otherwise generated. It may be
                used to display a sample of
              </h6>
            </p>
          </Button>
          <br /> <br />
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            <Box sx={{ fontWeight: "bold", m: 1 }}>CentChem</Box>
            {"\n"}
            <h6>
              <p>
                Filler text is text that shares some characteristics of a real
                written text, but is random or otherwise generated. It may be
                used to display a sample of
              </p>
            </h6>
          </Button>
          <br /> <br />
          <Button onClick={handleClickOpen}>CentOmics</Button> <br /> <br />
          <Button onClick={handleClickOpen}>CentCombi</Button>
        </Paper>
      </div>
      <div className="style">
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              <CardActions>
                <Button size="small">
                  <FileOpenIcon /> VIRTUAL <br /> SCREEN
                </Button>
              </CardActions>
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" text-align="right" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              <CardActions>
                <Button size="small">
                  <FileOpenIcon />
                  RETRO <br /> SYNTHESIS
                </Button>
              </CardActions>
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" text-align="right" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              <CardActions>
                <Button size="small">
                  <FileOpenIcon />
                  ADMET <br /> Prediction
                </Button>
              </CardActions>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default CentChem;
