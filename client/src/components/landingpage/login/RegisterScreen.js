import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import LandingpageTopnav from "../LandingpageTopnav";
import LandingpageFooter from "../LandingpageFooter";

import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import HowToRegIcon from '@mui/icons-material/HowToReg';
const RegisterScreen = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/users/register",
        {
          firstName,
          lastName,
          email,
          password,
        },
        config
      );
      console.log(data);
      history.push({ pathname: "/login", state: { email, password } });
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <LandingpageTopnav />

      <Box
        sx={{
          bgcolor: "landingnavbar.main",
          borderRadius: "0px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",

              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <HowToRegIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            {error && <span className="error-message">{error}</span>}
            <Box
              component="form"
              onSubmit={registerHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                type="text"
                label="First Name"
                name="firstName"
                margin="normal"
                autoFocus
                fullWidth
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                type="text"
                margin="normal"
                required
                fullWidth
                autoFocus
                name="lastName"
                value={lastName}
                label="Last Name"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />

              <TextField
                type="email"
                id="email"
                margin="normal"
                required
                fullWidth
                autoFocus
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                autoComplete="true"
                value={password}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                id="confirmpassword"
                autoComplete="true"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <LandingpageFooter /> */}
    </div>
  );
};

export default RegisterScreen;
