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

//dashboard
import MainDashboard from "./components/dashboard/maindashboard/MainDashboard";
import Calendar from "./components/dashboard/calendar/Calendar";
import EmployeeData from "./components/dashboard/employeedata/EmployeeData";
import Payroll from "./components/dashboard/payroll/Payroll";
import Tasks from "./components/dashboard/tasks/Tasks";
import ELearning from "./components/dashboard/elearning/ELearning";

// HOME COMPONENTS
import Home from "./components/landingpage/home/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
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

          {/* Dashboard */}
          <PrivateRoute exact path="/dashboard" component={MainDashboard} />
          <Route
            exact
            path="/dashboard/employeedata"
            component={EmployeeData}
          />
          <Route exact path="/dashboard/calendar" component={Calendar} />
          <Route exact path="/dashboard/payroll" component={Payroll} />
          <Route exact path="/dashboard/tasks" component={Tasks} />
          <Route exact path="/dashboard/elearning" component={ELearning} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
