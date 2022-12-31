import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Banner from "../components/Auth/banner";
import SignIn from "../components/Auth/signin";
import SignUp from "../components/Auth/signup";
import "../Assets/css/utilis.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Sidebar from "../pages/Sidebar";

function AuthPage() {
  const [type, setType] = useState("");
  const [value, setValue] = React.useState();

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let val = newValue === 0 ? "signin" : "signup";
    setType(val);
    console.log(event, newValue);
  };
  return (
    <>
      <Container maxWidth="xl" style={{ maxWidth: "100vw", padding: "0" }}>
        <Grid container md={12} lg={12} xl={12}>
          <Grid item md={2} lg={1} xl={1}>
            <div className="authTab">
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
              >
                <Tab label="SIGN IN" {...a11yProps(0)} />
                <Tab label="SIGN UP" {...a11yProps(1)} />
              </Tabs>
            </div>
          </Grid>
          <Grid item md={4} lg={4} xl={4}>
            <Banner></Banner>
          </Grid>
          {type === "signin" ? (
            <Grid item md={6} lg={7} xl={7}>
              <SignIn></SignIn>
            </Grid>
          ) : type === "signup" ? (
            <Grid item md={6} lg={7} xl={7}>
              <SignUp></SignUp>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </>
  );
}

export default AuthPage;
