import React, { Component } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "../assets/css/RetroEditor.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Jsme } from "jsme-react";
// import Divider from "@mui/material/Divider";

class RetroEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: <Form.Select aria-label="Default select example" />,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      msg: <Jsme height="400px" width="700px" options="oldlook,star"></Jsme>,
    });
  }
  render() {
    return (
      <div>
        <div className="chip">
          <Stack direction="row" spacing={4}>
            <Chip label="AdmetPrediction" color="primary" variant="outlined" />
            <Chip label="RetroSynthesis" color="primary" />
            <Chip label="DeNovoDesign" color="primary" variant="outlined" />
            <Chip
              label="Virtual Screening"
              color="primary"
              variant="outlined"
            />
          </Stack>
        </div>
        <div className="label">
          <h6>SmileStringEditor</h6>
          <InputGroup>
            <Form.Control
              placeholder=""
              aria-label="Recipient's username with two button addons"
            />
            <Button variant="primary" type="submit" onClick={this.handleClick}>
              Validate
            </Button>
          </InputGroup>
          <div className="smile">
            <h6>Visual Editor</h6>
          </div>

          {this.state.msg}
        </div>
      </div>
    );
  }
}
export default RetroEditor;
