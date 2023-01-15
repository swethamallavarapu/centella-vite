import React from "react";
import { Paper, styled, Stack } from "@mui/material";
import SampleBarChart from "../components/charts/barchart";
import {Container,Row} from 'react-bootstrap';
function DashboardPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#2D3748",
  }));
  const itemStyle = {
    width: "300px",
    height: "169px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "8px",
    boxShadow: "0px 1px 9px #00000029",
  };

  return (
    <>
      <Container>
        <Row>
        <Stack className="p-5" direction="row" spacing={4}>
          <Item style={itemStyle}>
            <span>Total Predictions</span>
          </Item>
          <Item style={itemStyle}>
            <span>Under Trails</span>
          </Item>
          <Item style={itemStyle}>
            <span>Completed/Approved</span>
          </Item>
        </Stack>
        </Row>       
        <SampleBarChart />
      </Container>
      
    </>
  );
}

export default DashboardPage;
