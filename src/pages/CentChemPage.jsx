import React from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CentChemPage() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  let navigate = useNavigate();
  const handleClick = (rid, cid) => {
    console.log(rid);
    let path = rid === 0 ? `/Centchem` : `CentRepurpose`;
    navigate(path + cid);
  };

  return (
    <>
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
                routerLink={<Link to="/DrawMolecule" />}
              >
                Paste Smile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => handleClick(0, "/DrawMolecule")}
                eventKey="4.2"
              >
                Draw Molicuel
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => handleClick(0, 1)}
                eventKey="4.3"
              >
                Upload File
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="2" href="#/home">
                Retro Synthesis
              </Nav.Link>
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
    </>
  );
}

export default CentChemPage;
