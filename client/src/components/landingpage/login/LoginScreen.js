import { useState, useEffect } from "react";
import axios from "axios";

// MUI IMPORTS
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// COMPONENT IMPORTS
import LandingpageTopnav from "../LandingpageTopnav";

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

      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
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
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
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
                label="Email Address"
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
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forgotpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default LoginScreen;

{
  /* <div className="loginarea">
          <div className="login-screen">
            <form onSubmit={loginHandler} className="login-screen__form">
              <h3 className="login-screen__title"> Sign in </h3>
              {error && <span className="error-message">{error}</span>}
              <div className="form-group">
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  tabIndex={1}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <Link
                    to="/forgotpassword"
                    className="login-screen__forgotpassword"
                  >
                    Forgot Password?
                  </Link>
                </label>
                <input
                  type="password"
                  required
                  id="password"
                  autoComplete="true"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  tabIndex={2}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <span className="login-screen__subtext">
                Don't have an account? <Link to="/register">Register</Link>
              </span>
            </form>
          </div>
        </div> */
}
