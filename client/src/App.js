import "./scss/main.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/landingpage/login/routing/PrivateRoute";

// LOGIN COMPONENTS
import PrivateScreen from "./components/landingpage/login/dashboard";
import LoginScreen from "./components/landingpage/login/LoginScreen";
import RegisterScreen from "./components/landingpage/login/RegisterScreen";
import ForgotPasswordScreen from "./components/landingpage/login/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/landingpage/login/ResetPasswordScreen";

// HOME COMPONENTS
import Home from "./components/landingpage/home/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/dashboard" component={PrivateScreen} />

          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;