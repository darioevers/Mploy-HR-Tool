import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// IMPORT COMPONENTS


import LandingpageTopnav from "../navigation/LandingpageTopnav";
import LandingpageFooter from "../navigation/LandingpageFooter";

// MUI IMPORTS
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
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
            {t("landingResetPw.title01")}
          </Typography>
          {error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {t("landingAlerts.error")}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ width: "100%" }}>
              {t("landingAlerts.success")}
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={resetPasswordHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label={t("landingResetPw.formdesc01")}
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t("landingResetPw.formdesc02")}
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              {t("landingResetPw.button01")}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body1" sx={{ fontWeight: 300 }}>
                  {t("landingResetPw.link01")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

    </div>
  );
};

export default ResetPasswordScreen;


{
  /* <div className="resetpassword-screen">
<form
  onSubmit={resetPasswordHandler}
  className="resetpassword-screen__form"
>
  <h3 className="resetpassword-screen__title">Forgot Password</h3>
  {error && <span className="error-message">{error} </span>}
  {success && (
    <span className="success-message">
      {success} <Link to="/login">Login</Link>
    </span>
  )}
  <div className="form-group">
    <label htmlFor="password">New Password:</label>
    <input
      type="password"
      required
      id="password"
      placeholder="Enter new password"
      autoComplete="true"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="confirmpassword">Confirm New Password:</label>
    <input
      type="password"
      required
      id="confirmpassword"
      placeholder="Confirm new password"
      autoComplete="true"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Reset Password
  </button>
</form>
</div> */
}

