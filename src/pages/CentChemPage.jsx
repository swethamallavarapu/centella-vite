import React from "react";
import { Container, Grid, Stack, styled, Paper } from "@mui/material";
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

import "../assets/css/utilis.css";
import SideBox from "../components/landing/sideBox";

function CentChemPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: '#2D3748',
  }));
  const itemStyle = {
    padding: "5%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    boxShadow: "5px 6px 6px #00000029",
  };

  return (
    <>
      <Container maxWidth="xl" style={{ maxWidth: "100vw", padding: "0" }}>
        <Grid container>
          <Grid item md={2} lg={1} xl={1}></Grid>
          <Grid item md={4} lg={4} xl={4}>
            <SideBox />
          </Grid>
          <Grid item md={6} lg={7} xl={7}>
            <Stack className="p-5" direction="row" spacing={4}>
              <Item style={itemStyle}><PhotoOutlinedIcon /><br />ADMET Prediction</Item>
              <Item style={itemStyle}><PhotoOutlinedIcon /><br />Retro Synthesis</Item>
              <Item style={itemStyle}><PhotoOutlinedIcon /><br />Virtual Screen</Item>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CentChemPage;
