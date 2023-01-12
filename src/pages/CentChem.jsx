import { Paper, Container, Grid, styled, Stack } from "@mui/material";
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.h6,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const boxStyle = { marginLeft: "25%", paddingTop: "10%" };
  const boxItemStyle = {
    padding: "15%",
    background: "#E7EAEE 0% 0% no-repeat padding-box",
    borderRadius: "10px 0px 0px 10px",
  };
  const contentItemStyle = {
    padding: "5%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "5px 6px 6px #00000029",
    borderRadius: "10px",
  };
  return (
    <div>
      <Container maxWidth="xl" style={{ maxWidth: "100vw", padding: "0" }}>
        <Grid container>
          <Grid item md={2} lg={1} xl={1}>
            <div className="authTab"></div>
          </Grid>
          <Grid item md={4} lg={4} xl={4}>
            <Paper elevation={4} className="banner">
              <div style={boxStyle}>
                <Stack spacing={5}>
                  <Button variant="text">
                    <Item style={boxItemStyle}>
                      CentChem
                      {/* <p>
                        <h6>
                          Filler text is text that shares some characteristics
                          of a real written text, but is random or otherwise
                          generated. It may be used to display a sample of
                        </h6>
                      </p> */}
                    </Item>
                  </Button>
                  <Button>
                    <Item style={boxItemStyle}>CentRepurpose</Item>
                  </Button>
                  <Button>
                    <Item style={boxItemStyle}>CentOmics</Item>
                  </Button>
                  <Button>
                    <Item style={boxItemStyle}>CentCombi</Item>
                  </Button>
                </Stack>
              </div>
            </Paper>
          </Grid>
          <Grid item md={6} lg={6} xl={6}></Grid>
          <div>
            <Stack direction="row" spacing={5} paddingLeft="800px">
              <Button>
                <Item style={contentItemStyle}>ADMET Prediction</Item>
              </Button>
              <Item style={contentItemStyle}>Retro Synthesis</Item>
              <Item style={contentItemStyle}>Virtual Screen</Item>
            </Stack>
          </div>
        </Grid>
      </Container>

      {/* <div className="Cent">
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
      </div> */}
    </div>
  );
};
export default CentChem;
