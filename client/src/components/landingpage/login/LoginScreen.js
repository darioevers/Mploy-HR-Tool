import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
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
      <div className="loginarea">
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
      </div>
    </div>
  );
};

export default LoginScreen;
