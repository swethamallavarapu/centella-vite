import { Paper } from "@mui/material";
import * as React from "react";
import "../../assets/css/banner.css";
import bgimg from "../../assets/images/centella.png";
function Banner() {
  return (
    <Paper elevation={4} className="banner">
      <div className="p-4">
        {/* <div className="banner-img p2"></div> */}
        <img className="banner-img p-3 ml-5" src={bgimg} alt="centella"></img>
        <p className="banner-text">
          The purpose of the web interface is to build an interactive web
          platform to assist drug discovery researchers,Medicinal Chemists in
          specific in predicting the various ADMET properties of given set of
          chemical molecule/s.The prediction of these properties would help
          scientists to triage the molecules and take them to next level of
          experimentation.
        </p>
      </div>
    </Paper>
  );
}

export default Banner;
