import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const ResetPasswordScreen = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    // make our request to the backend
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    // check if the two passwords do not much remove and clear state
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      console.log(match.params.resetToken);
      const { data } = await axios.put(
        `http://localhost:5000/users/passwordreset/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      console.log(error);
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
              <VpnKeyIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            {error && <span className="error-message">{error} </span>}
            {success && (
              <span className="success-message">
                {success} <Link to="/login">Login</Link>
              </span>
            )}
            <Box
              component="form"
              onSubmit={resetPasswordHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                autoComplete="true"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                id="confirmpassword"
                autoComplete="true"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="ConfirmPassword"
                type="password"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
             
            </Box>
          </Box>
        </Container>
      </Box>

     
     
      <LandingpageFooter />
    </div>
  );
};

export default ResetPasswordScreen;
