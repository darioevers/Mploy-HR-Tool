import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
// IMPORT COMPONENTS
import LandingpageTopnav from "../LandingpageTopnav";
import LandingpageFooter from "../LandingpageFooter";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px red",
  },
}));
const ForgotPasswordScreen = () => {
  const classes = useStyles();
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
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOpenIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">{success}</span>}
            <Typography
              sx={{ margin: "1rem 2rem 0 2rem" }}
              align="justify"
              variant="body2"
              margin
            >
              Enter your email Address and we will send you a reset password
              email to your email address.
            </Typography>
            <Box
              component="form"
              onSubmit={forgotPasswordHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                type="email"
                required
                id="email"
                label="Email Address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Send Email
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <LandingpageFooter /> */}
    </div>
  );
};

export default ForgotPasswordScreen;
