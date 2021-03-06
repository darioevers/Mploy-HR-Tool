import { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

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
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

// COMPONENT IMPORTS

import LandingpageTopnav from "../navigation/LandingpageTopnav";

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/login");
    }
    if (location.state && location.state.email) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, [history, location.state]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/users/login",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("role", data.role);

      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const { t } = useTranslation();

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
              {t("landingLogin.title01")}
            </Typography>

            {error && (
              <Alert severity="error" sx={{ width: "100%" }}>
                {t("landingAlerts.error")}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={loginHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t("landingLogin.formdesc01")}
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t("landingLogin.formdesc02")}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2 }}
              >
                {t("landingLogin.button01")}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={"/forgotpassword"}>
                    <Typography variant="body1" sx={{ fontWeight: 300 }}>
                      {t("landingLogin.link01")}
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/register"}>
                    <Typography variant="body1" sx={{ fontWeight: 300 }}>
                      {t("landingLogin.link02")}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <LandingpageFooter /> */}
    </div>
  );
};

export default LoginScreen;
