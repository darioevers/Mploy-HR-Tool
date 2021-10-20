import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // once they login they should not come to the login

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

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

      localStorage.setItem("authToken", data.token);
      console.log(data);
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Sign in</h3>
        {error && <span className="error-message"> {error} </span>}

        <div className="form-group">
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            tabIndex={1}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            <Link
              to="/forgotpassword"
              className="login-screen__forgotpassword"
              tabIndex={4}
            >
              Forgot Password ?
            </Link>
          </label>

          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={2}
          />
        </div>

        <button type="submit" className="btn btn-primary" tabIndex={3}>
          Login
        </button>

        <span className="login-screen__subtext">
          Do not have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
