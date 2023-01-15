import React from "react";
import { Container, Grid, Stack, styled, Paper } from "@mui/material";
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import { useNavigate } from "react-router-dom";
import "../assets/css/utilis.css";
import SideBox from "../components/landing/sideBox";

function LandingPage() {
    let navigate = useNavigate(); 
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
  const handleClick=(rid,cid)=>{
    console.log(rid)
    let path = rid===0?`/Centchem`:`CentRepurpose`; 
    navigate(path+cid);
  }
  const clickFun=(id)=>{
    console.log('function clicked'+id)
  }
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
              <Item style={itemStyle} onClick={()=>handleClick(0,'/ADMET')}><div><PhotoOutlinedIcon /><br />ADMET Prediction</div></Item>
              <Item style={itemStyle} onClick={()=>handleClick(0,1)}><PhotoOutlinedIcon /><br />Retro Synthesis</Item>
              <Item style={itemStyle} onClick={()=>handleClick(0,2)}><PhotoOutlinedIcon /><br />Virtual Screen</Item>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default LandingPage;
