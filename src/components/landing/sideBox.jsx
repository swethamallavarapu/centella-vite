import * as React from "react";
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { styled } from "@mui/material/styles";
import "../../assets/css/banner.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.h6,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "135px",
  borderRadius: "10px 0px 0px 10px",
}));

const boxStyle = { marginLeft: "35%", paddingTop: "8%" };
const itemStyle = {
  padding: "18%",
  background: "#E7EAEE 0% 0% no-repeat padding-box",
  borderRadius: "10px 0px 0px 10px",
};
const cardStyle = {
  background:
    "transparent linear-gradient(89deg, #719FD4 0%, #125696 100%) 0% 0% no-repeat padding-box",
  borderRadius: "10px 0px 0px 10px",
};
const cardTitle = {
  textAlign: "left",
  font: "normal normal 600 18px/28px Segoe UI",
  letterSpacing: "0px",
  color: "#C5F26D",
  padding: "15px 0px 0px 10px",
  margin: "0px",
};
const cardContent = {
  textAlign: "left",
  font: "normal normal normal 14px/18px Segoe UI",
  letterSpacing: "0px",
  color: "#E7EAEE",
  padding: "0px 1px 6px 10px",
};
class SideBox extends React.Component {
  constructor() {
    super();
    this.state = {
      flipped: new Set()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    return (e) => {
      e.preventDefault();
      let flipped = new Set(this.state.flipped);
      if (flipped.has(id)) {
        flipped.delete(id);
      } else {
        flipped.add(id);
      }
      this.setState({ flipped });
    };
  }
  render() {
    return (
      <Paper elevation={4} className="banner">
        <div style={boxStyle}>
          <Stack spacing={3}>
            <Item>
              <ReactCardFlip
                isFlipped={this.state.flipped.has(1)}
                flipDirection="vertical"
              >
                <div style={itemStyle} onClick={this.handleClick(1)}>
                  {" "}
                  CentChem
                </div>

                <div style={cardStyle} onClick={this.handleClick(1)}>
                  <p style={cardTitle}>CentChem</p>
                  <p style={cardContent}>
                    Filler text is text that shares some characteristics of a
                    real written text, but is random or otherwise generated. It
                    may be used to display a sample of
                  </p>
                </div>
              </ReactCardFlip>
            </Item>
            <Item>
              <ReactCardFlip
                isFlipped={this.state.flipped.has(2)}
                flipDirection="vertical"
              >
                <div style={itemStyle} onClick={this.handleClick(2)}>
                  {" "}
                  CentRepurpose
                </div>

                <div style={cardStyle} onClick={this.handleClick(2)}>
                  <p style={cardTitle}>CentRepurpose</p>
                  <p style={cardContent}>
                    Filler text is text that shares some characteristics of a
                    real written text, but is random or otherwise generated. It
                    may be used to display a sample of
                  </p>
                </div>
              </ReactCardFlip>
            </Item>
            <Item>
              <ReactCardFlip
                isFlipped={this.state.flipped.has(3)}
                flipDirection="vertical"
              >
                <div style={itemStyle} onClick={this.handleClick(3)}>
                  {" "}
                  CentOmics
                </div>

                <div style={cardStyle} onClick={this.handleClick(3)}>
                  <p style={cardTitle}>CentOmics</p>
                  <p style={cardContent}>
                    Filler text is text that shares some characteristics of a
                    real written text, but is random or otherwise generated. It
                    may be used to display a sample of
                  </p>
                </div>
              </ReactCardFlip>
            </Item>
            <Item>
              <ReactCardFlip
                isFlipped={this.state.flipped.has(4)}
                flipDirection="vertical"
              >
                <div style={itemStyle} onClick={this.handleClick(4)}>
                  {" "}
                  CentCombi
                </div>

                <div style={cardStyle} onClick={this.handleClick(4)}>
                  <p style={cardTitle}>CentCombi</p>
                  <p style={cardContent}>
                    Filler text is text that shares some characteristics of a
                    real written text, but is random or otherwise generated. It
                    may be used to display a sample of
                  </p>
                </div>
              </ReactCardFlip>
            </Item>
          </Stack>
        </div>
      </Paper>
    );
  }
}
export default SideBox;
