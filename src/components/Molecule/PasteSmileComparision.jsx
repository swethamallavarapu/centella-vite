import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";
// import { Compare } from "@mui/icons-material";
import CentChemPage from "../../pages/CentChemPage";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Table from "react-bootstrap/Table";
// import "../assets/css/MoleculeComparision.css";
import Button from "@mui/material/Button";
import SampleRadar from "../charts/radarchart";
import { Container, Row } from "react-bootstrap";
import { Stack, styled } from "@mui/material";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Compare from "../Molecule/Compare";

function MoleculeComparision() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#2D3748",
  }));
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div>
      <>
        <CentChemPage />
        <Container>
          <Row>
            <Stack className="p-4" direction="row" spacing={68}>
              <Item>
                <span>
                  <div>
                    <ListGroup className="List">
                      <ListGroup.Item onClick={handleClick("right-start")}>
                        Medical Chemistry
                      </ListGroup.Item>
                      <ListGroup.Item onClick={handleClick("right")}>
                        Adsorption
                      </ListGroup.Item>
                      <ListGroup.Item onClick={handleClick("right")}>
                        Distribution
                      </ListGroup.Item>
                      <ListGroup.Item onClick={handleClick("right")}>
                        Metabolism
                      </ListGroup.Item>

                      <Popper
                        open={open}
                        anchorEl={anchorEl}
                        placement={placement}
                        transition
                      >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                              <Card sx={{ minWidth: 275 }}>
                                <Table striped>
                                  <tbody>
                                    <tr>
                                      <td>QED</td>
                                    </tr>
                                    <tr>
                                      <td>SAscore</td>
                                    </tr>
                                    <tr>
                                      <td>Fsp3</td>
                                    </tr>
                                    <tr>
                                      <td>MCE-18</td>
                                    </tr>
                                    <tr>
                                      <td>NPscore</td>
                                    </tr>
                                    <tr>
                                      <td>Lipinski Rule</td>
                                    </tr>
                                    <tr>
                                      <td>Pfizer Rule</td>
                                    </tr>
                                    <tr>
                                      <td>GSK Rule</td>
                                    </tr>
                                    <tr>
                                      <td>Golden Traingle</td>
                                    </tr>
                                    <tr>
                                      <td>Pains</td>
                                    </tr>
                                    <tr>
                                      <td>Alarm NMR Rule</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </Card>
                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                      <ListGroup.Item onClick={handleClick("right")}>
                        PhysicoChemicalProperty
                      </ListGroup.Item>
                      <ListGroup.Item onClick={handleClick("right")}>
                        Toxicity
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
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

        {/* <Button variant="outlined">Submit</Button> */}
        {values.map((v, idx) => (
          <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
            Submit
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        ))}
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Compare />
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default MoleculeComparision;
