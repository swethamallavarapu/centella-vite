import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Example() {
  <div>
    <Card>
      <Card.Header>Select Parameters</Card.Header>
      <Card.Body>
        <Form.Select aria-label="Choose AI Model Vesion">
          <option>AI Model Version 1</option>
          <option>AI Model Version 2</option>
          <option>AI Model Version 3</option>
        </Form.Select>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Interactive Mode" />
          <Form.Check type="checkbox" label="Automatic Mode" />
        </Form.Group>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" type="submit">
          Predict RetroSynthesis Route
        </Button>
      </Card.Footer>
    </Card>
  </div>;
}
export default Example;
