import React, { useState } from "react";
import axios from "axios";
import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const ForgotPasswordScreenHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-type": "application/json",
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
    <div className="forgotpassword-screen">
      <form
        onSubmit={ForgotPasswordScreenHandler}
        className="forgotpassword-screen__form"
      >
        <h3 className="forgotpassword-screen__title">Forgot Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <p className="forgotpassword-screen__subtext">
            Enter yout email Address and we will send you a reset password email
            to your email address.
          </p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
