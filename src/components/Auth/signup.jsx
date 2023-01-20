import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function SignUp() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Fullname is required"),
    emailId: Yup.string().required("Email Address is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <>
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

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email ID"
                name="email"
                autoComplete="email"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                name="MobileNumber"
                label="Mobile Number"
                type="mobile number"
                id="mobile number"
                autoComplete="mobile number"
                {...register("mobile number")}
                error={errors.mobilenumber ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.mobilenumber?.message}
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                name="Organization name"
                label="Organization Name"
                type="name"
                id="name"
                autoComplete=" organization name"
              />
              <TextField
                margin="normal"
                fullWidth
                name="Your role"
                label="Your Role"
                type="role"
                id="role"
                autoComplete="role"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit(onSubmit)}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
