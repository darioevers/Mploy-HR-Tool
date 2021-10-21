import "./scss/main.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

// importing screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import LoRegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

function App() {
  return (
    <>
      <Router>
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
