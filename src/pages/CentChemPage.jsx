import Upload from "./Upload";
import React, { useState } from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import Button from "@mui/material/Button";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/css/Upload.css";

function CentChemPage() {
  const mystyle = {
    padding: "200px",
    left: "150px",
  };
  const style = {
    padding: "20px",
  };
  let navigate = useNavigate();
  const handleClick = (rid, cid) => {
    console.log(rid);
    let path = rid === 0 ? `/Centchem` : `RetroSynthesis`;
    navigate(path + cid);
  };
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div style={style}>
      <Container fluid>
        <Row>
          <Nav variant="pills" activeKey="1">
            <NavDropdown
              title="ADMET Prediction"
              eventKey="1"
              id="nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => handleClick(0, "/PasteSmile")}
                eventKey="4.1"
                // routerlink={<Link to="/DrawMolecule" />}
              >
                Paste Smile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => handleClick(0, "/DrawMolecule")}
                eventKey="4.2"
              >
                Draw Molecule
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {values.map((v, idx) => (
                <NavDropdown.Item
                  // onClick={() => handleClick(0, "/Upload")}
                  // eventKey="4.3"
                  key={idx}
                  className="me-2 mb-2"
                  onClick={() => handleShow(v)}
                >
                  Upload File{" "}
                  {typeof v === "string" && `below ${v.split("-")[0]}`}
                </NavDropdown.Item>
              ))}

              <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body style={mystyle}>
                  <Upload />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary" onSubmit={handleSubmit}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </NavDropdown>
            <Nav.Item
              onClick={() => handleClick(0, "/RetroSynthesis")}
              eventKey="1"
            >
              <Nav.Link eventKey="2">Retro Synthesis</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" href="#/home">
                DeNovo Design
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" href="#/home">
                Virtual Screening
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col lg={2} md={3} style={{ padding: "0" }}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CentChemPage;
