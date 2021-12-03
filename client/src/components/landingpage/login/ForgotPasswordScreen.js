import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// IMPORT COMPONENTS
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
import Alert from "@mui/material/Alert";



const ForgotPasswordScreen = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/users/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const { t } = useTranslation();

  return (
    <div>
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
            <h3 className="forgotpassword-screen__title">
              {t("landingForgotPw.title01")}
            </h3>
            {error && (
              <Alert severity="error" sx={{ width: "100%" }}>
                {t("landingAlerts.error")}
              </Alert>
            )}
            {success && (
              <Alert severity="success">{t("landingAlerts.success")}</Alert>
            )}
          </Typography>
          <Typography variant="title2">
            {t("landingForgotPw.title02")}
          </Typography>
          <Box
            component="form"
            onSubmit={forgotPasswordHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("landingForgotPw.formdesc01")}
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              {t("landingForgotPw.button01")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={"/login"}>
                  <Typography variant="body1" sx={{ fontWeight: 300 }}>
                    {t("landingForgotPw.link01")}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/register"}>
                  <Typography variant="body1" sx={{ fontWeight: 300 }}>
                    {t("landingForgotPw.link02")}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

    </div>
  );
};

export default ForgotPasswordScreen;

