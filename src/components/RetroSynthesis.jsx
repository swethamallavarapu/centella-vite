import React from "react";
import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import Slide from "@mui/material/Slide";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../assets/css/RetroSynthesis.css";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

export default function FullScreenDialog() {
  const [Open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState("target");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `RetroEditor`;
    navigate(path);
  };

  return (
    <div>
      <div className="card-style">
        <Card>
          <Card.Header color="primary">
            <h5>RetroSynthesis Prediction</h5>
          </Card.Header>
          <Card.Body>
            <fieldset>
              <Form.Group as={Col} className="mb-3">
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Add to pre-existing project"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                  </Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>Select project</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Add to brand new project"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Add project" />
                  </Col>
                </Row>
              </Form.Group>
            </fieldset>
            <div>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <u>Start From</u>
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
                    label="Target Molecule"
                  />
                  <FormControlLabel
                    value="file"
                    control={<Radio />}
                    label="From File"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Card.Body>
          <div className="button">
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button onClick={handleClose}>CANCEL RETROSYNTHESIS</Button>

              <Button onClick={routeChange}>PREDICT RETROSYNTHESIS</Button>
            </ButtonGroup>
          </div>
        </Card>
      </div>
      {/* </Dialog> */}
    </div>
  );
}
