import "./scss/main.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";

// LOGIN COMPONENTS
import PrivateScreen from "./components/landingpage/login/PrivateScreen";
import LoginScreen from "./components/landingpage/login/LoginScreen";
import LoRegisterScreen from "./components/landingpage/login/RegisterScreen";
import ForgotPasswordScreen from "./components/landingpage/login/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/landingpage/login/ResetPasswordScreen";
import LandingpageTopnav from "./components/landingpage/LandingpageTopnav";

function App() {
  return (
    <>
      <Router>
        <LandingpageTopnav />
        <div className="app">
          <Switch>
            {/* <PrivateRoute exact path="/" component={PrivateScreen} /> */}
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={LoRegisterScreen} />
            <Route
              exact
              path="/forgotpassword"
              component={ForgotPasswordScreen}
            />
            <Route
              exact
              path="/passwordreset/resetToken"
              component={ResetPasswordScreen}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
