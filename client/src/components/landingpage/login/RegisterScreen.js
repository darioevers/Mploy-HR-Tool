import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// NAVBAR & FOOTER IMPORTS
import LandingpageTopnav from "../navigation/LandingpageTopnav";

// MUI IMPORTS
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

const theme = createTheme();

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

  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <LandingpageTopnav />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t("landingRegister.title01")}
          </Typography>
          {error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {t("landingAlerts.error")}
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={registerHandler}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={0.5}>
              <Grid item xs={6} sm={6}>
                <TextField
                  type="text"
                  label={t("landingRegister.formdesc01")}
                  name="firstName"
                  margin="normal"
                  autoFocus
                  fullWidth
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  type="text"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  name="lastName"
                  value={lastName}
                  label={t("landingRegister.formdesc02")}
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  id="email"
                  required
                  fullWidth
                  autoFocus
                  label={t("landingRegister.formdesc03")}
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="true"
                  value={password}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t("landingRegister.formdesc04")}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="confirmpassword"
                  autoComplete="true"
                  required
                  fullWidth
                  name="confirmPassword"
                  label={t("landingRegister.formdesc05")}
                  type="password"
                  autoComplete="current-password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {t("landingRegister.button01")}
                </Button>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body1" sx={{ fontWeight: 300 }}>
                  {t("landingRegister.link01")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterScreen;
