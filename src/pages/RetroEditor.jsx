import React, { useState } from "react";
import Editor from "../components/Molecule/Jsme";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import CentChemPage from "./CentChemPage";
import Example from "../components/Molecule/Card";
import { Stack } from "@mui/material";
import { Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function RetroEditor() {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);

  const handleClick = () => {
    setShowComponent1(true);
    setShowComponent2(true);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/VisualEditor");
  };

  return (
    <div>
      <div>
        <CentChemPage />
      </div>
      <div>
        {/* <Row> */}
        {/* <Stack className="p-4" direction="col" spacing={0}></Stack> */}
        <Container>
          <h6>SmileStringEditor</h6>
          <InputGroup>
            <Form.Control
              placeholder=""
              aria-label="Recipient's username with two button addons"
            />

            {/* <button onClick={handleClick}>Show Child Component</button> */}
            <Button variant="primary" type="submit" onClick={handleClick}>
              Show Components
            </Button>
          </InputGroup>
          <h6>SmileStringEditor</h6>
          <InputGroup>
            <Form.Control
              placeholder=""
              aria-label="Recipient's username with two button addons"
            />
          </InputGroup>
          {/* {showComponent1 && <Editor />}
          {showComponent2 && <Example />} */}

          {/* </Row> */}
          <Row>
            <Stack className="p-4" direction="row" spacing={0}>
              {showComponent1 && <Editor />}
              {showComponent2 && <Example />}
              <span>
                <Card style={{ height: "405px" }}>
                  <Card.Header>Select Parameters</Card.Header>
                  <Card.Body>
                    <Form.Select aria-label="Choose AI Model Vesion">
                      <option>AI Model Version 1</option>
                      <option>AI Model Version 2</option>
                      <option>AI Model Version 3</option>{" "}
                    </Form.Select>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Interactive Mode" />
                      <Form.Check type="checkbox" label="Automatic Mode" />
                    </Form.Group>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleButtonClick}
                    >
                      Predict RetroSynthesis Route
                    </Button>
                  </Card.Footer>
                </Card>
              </span>
            </Stack>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default RetroEditor;
