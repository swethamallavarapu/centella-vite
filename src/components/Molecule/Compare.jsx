import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Divider from "@mui/material/Divider";
// import { Table } from "react-bootstrap";
import TableCompare from "./TableCompare";
import { Row } from "react-bootstrap";
import { Stack, styled } from "@mui/material";
import Paper from "@mui/material/Paper";

export default function Compare() {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#2D3748",
  }));
  return (
    <Card>
      <Card.Header> Comparision (MedicalChemistry and Metabolism)</Card.Header>
      <Card.Body>
        <Row>
          <Stack className="p-4" direction="row" spacing={28}>
            {/* <h5> Select to Compare </h5> */}
            <Item>
              <h5> Select to Compare </h5>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Medicinal Chemistry</ListGroup.Item>
                <ListGroup.Item>Absorption</ListGroup.Item>
                <ListGroup.Item>Distribution</ListGroup.Item>
                <ListGroup.Item>Metabolism</ListGroup.Item>
                <ListGroup.Item>PhysicoChemicalProperty</ListGroup.Item>
                <ListGroup.Item>Toxicity</ListGroup.Item>
              </ListGroup>
            </Item>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Item>
              <Card>
                <TableCompare />
              </Card>
            </Item>
          </Stack>
        </Row>
      </Card.Body>
    </Card>
  );
}
