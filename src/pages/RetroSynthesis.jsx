import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Divider } from "@mui/material";
import "../assets/css/RetroSynthesis.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import TextField from "@mui/material/TextField";

function RetroSynthesis() {
  const [value, setValue] = React.useState("addtoapreexistingproject");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="card-style">
        <Card border="black">
          <Card.Header color="primary">
            <h5>RetroSynthesis Prediction</h5>
          </Card.Header>
          <Card.Body>
            {/* <div className="form-group row">
              <label>
                <h6>Add to pre-existing Group</h6>
              </label>
              <div className="col-sm-2 mt-2">
                Yes{" "}
                <input
                  type="radio"
                  className="mx-2"
                  name="isyes"
                  value="1"
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className="col-sm-2 mt-2">
                No{" "}
                <input
                  type="radio"
                  className="mx-2 mt-1"
                  name="isyes"
                  value="0"
                  onClick={() => setVisible(false)}
                />
              </div>
            </div>
            {visible && (
              <div className="form-group row">
                <label>
                  {" "}
                  <h6>Add to pre-existing Group</h6>
                </label>
                <div className="col-sm-6">
                  <Form.Select aria-label="Default select example">
                    <option>Select project</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
            )}

            <Divider />
            <div className="form-group row">
              <label>
                <h6>Add to a brand new project</h6>
              </label>
              <div className="col-sm-2 mt-2">
                Yes{" "}
                <input
                  type="radio"
                  className="mx-2"
                  name="isyes"
                  value="1"
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className="col-sm-2 mt-2">
                No{" "}
                <input
                  type="radio"
                  className="mx-2 mt-1"
                  name="isyes"
                  value="0"
                  onClick={() => setVisible(false)}
                />
              </div>
            </div>
            {visible && (
              <div className="form-group row">
                <label>
                  {" "}
                  <h6>Add to a brand new project</h6>
                </label>
                <div className="col-sm-6">
                  <TextField
                    //
                    height="20px"
                    id="floatingInputGrid"
                    label="Add project Name"
                    variant="outlined"
                  />
                </div>
              </div> 
            )} */}

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                {/* <Form.Label as="legend" column sm={2}>
                  Radios
                </Form.Label> */}
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  {/* <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  /> */}
                </Col>
              </Form.Group>
            </fieldset>
            <Divider />
            <div>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <u>Start From </u>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="target"
                    control={<Radio />}
                    label="Target molecule"
                  />
                  <FormControlLabel
                    value="file"
                    control={<Radio />}
                    label="From file"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <Card.Footer>
              <ButtonGroup aria-label="Basic example" size="large">
                <Button color="Secondary" gap-2>
                  CANCEL RETROSYNTASIS
                </Button>
                <Button color="Secondary">PREDICT RETROSYNTASIS</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default RetroSynthesis;
