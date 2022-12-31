import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const theme = createTheme();
export default function SignUp(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    props.sendData("signin");
    console.log(JSON.stringify(data, null, 2), props);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="style-2">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h5" textAlign="left">
              SIGN UP
            </Typography>
            <Box
              component="form"
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
              noValidate
            >
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    {...register("name")}
                    error={errors.name ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.name?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    margin="dense"
                    {...register("email")}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    // required
                    fullWidth
                    name="MobileNumber"
                    label="Mobile Number"
                    id="mobilenumber"
                    autoComplete="mobile number"
                    {...register("mobilenumber")}
                    // error={errors.mobilenumber ? true : false}
                  />
                  {/* <Typography variant="inherit" color="textSecondary">
                    {errors.mobilenumber?.message}
                  </Typography> */}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="Organization name"
                    label="Organization Name"
                    id="orgName"
                    {...register("orgName")}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="Your role"
                    label="Your role"
                    id="role"
                    {...register("role")}
                  />
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Register
                </Button>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
