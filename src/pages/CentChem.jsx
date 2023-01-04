import { Paper } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "../assets/css/CentChem.css";

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
              written text, but is random or otherwise generated. It may be used
              to display a sample of
            </h6>
          </p>
        </Button>
        <br /> <br />
        <Button variant="Outlined" onClick={handleClickOpen}>
          <Box sx={{ fontWeight: "bold", m: 1 }}>CentChem</Box>
          {"\n"}
          <h6>
            <p>
              Filler text is text that shares some characteristics of a real
              written text, but is random or otherwise generated. It may be used
              to display a sample of
            </p>
          </h6>
        </Button>
        <br /> <br />
        <Button onClick={handleClickOpen}>CentOmics</Button> <br /> <br />
        <Button onClick={handleClickOpen}>CentCombi</Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle> CentChem </DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "background.paper",
              }}
            ></Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}></Button>
          </DialogActions>
        </Dialog>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle> CentChem </DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "background.paper",
              }}
            ></Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}></Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
};
export default CentChem;
