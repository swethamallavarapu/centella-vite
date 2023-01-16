import React from "react";
import { Container, Row, Col,Nav,NavDropdown } from "react-bootstrap";

function CentChemPage() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
    <Container fluid>
      <Row>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="ADMET Prediction" eventKey="1" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Paste Smile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.2">Draw Molicuel</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3">Upload File</NavDropdown.Item>
        
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
          <Col lg={2} md={3} style={{padding:'0'}}>
            
      </Col>
        </Row>
      </Container>
    </>
  );
}

export default CentChemPage;
