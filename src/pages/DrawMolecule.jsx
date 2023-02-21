import { useState } from "react";
// import { useForm } from "react-hook-form";
import "../assets/css/DrawMolecule.css";
import CentchemPage from "./CentChemPage";
import { Button } from "@mui/material";
import { Container, Row } from "react-bootstrap";
import { Jsme } from "jsme-react";
import { useNavigate } from "react-router-dom";
import SampleRadar from "../components/charts/radarchart";
import { Paper, Stack, styled } from "@mui/material";

export default function App() {
  const [solutestate, setSoluteState] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `MoleculeComparision`;
    navigate(path);
  };
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#2D3748",
  }));

  return (
    <div>
      <>
        <CentchemPage />
        <Container>
          <Row>
            <Stack className="p-4" direction="row" spacing={2}>
              <Item>
                <span>
                  <Jsme
                    height="400px"
                    width="700px"
                    options="oldlook,star"
                    onChange={setSoluteState}
                  />
                </span>
              </Item>

              <Item>
                <span>
                  <SampleRadar />
                </span>
              </Item>
            </Stack>
          </Row>
        </Container>
        <h1>{solutestate}</h1>
        <Button type="submit" onClick={routeChange} variant="outlined">
          Submit
        </Button>
      </>
    </div>
  );
}
