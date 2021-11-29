import "./scss/main.scss";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToggleColorMode } from "./components/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";

// ROUTING IMPORTS
import PrivateRoute from "./components/landingpage/login/routing/PrivateRoute";

// LANDINGPAGE COMPONENTS
import Home from "./components/landingpage/home/Home";
import About from "./components/landingpage/about/About";
import Contact from "./components/landingpage/contact/Contact";
import Solutions from "./components/landingpage/solutions/Solutions";
import Pricing from "./components/landingpage/pricing/Pricing";

// LOGIN COMPONENTS
import LoginScreen from "./components/landingpage/login/LoginScreen";
import RegisterScreen from "./components/landingpage/login/RegisterScreen";
import ForgotPasswordScreen from "./components/landingpage/login/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/landingpage/login/ResetPasswordScreen";

//DASHBOARD COMPONENTS
import MainDashboard from "./components/dashboard/maindashboard/MainDashboard";
import Calendar from "./components/dashboard/calendar/Calendar";
import EmployeeData from "./components/dashboard/employeedata/EmployeeData";
import AddEmployee from "./components/dashboard/employeedata/AddEmployee";
import EditEmployee from "./components/dashboard/employeedata/EditEmployee";
import AddHrInfo from "./components/dashboard/employeedata/AddHrInfo";
import AddDocument from "./components/dashboard/employeedata/AddDocument";

import Payroll from "./components/dashboard/payroll/Payroll";
import Tasks from "./components/dashboard/tasks/Tasks";
import ELearning from "./components/dashboard/elearning/ELearning";

const App = () => {
  return (
    <Suspense fallback="...is loading">
      <ToggleColorMode>
        <CssBaseline />
        <Router>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/solutions" component={Solutions} />
              <Route exact path="/pricing" component={{ Pricing }} />
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

              <Route
                exact
                path="/dashboard/employeedata/addemployee"
                component={AddEmployee}
              />

              <Route
                exact
                path="/dashboard/employeedata/editemployee"
                component={EditEmployee}
              />
              <Route
                exact
                path="/dashboard/employeedata/addemployee/hrinfo"
                component={AddHrInfo}
              />

              <Route
                exact
                path="/dashboard/employeedata/addemployee/documents"
                component={AddDocument}
              />
              <Route exact path="/dashboard/calendar" component={Calendar} />
              <Route exact path="/dashboard/payroll" component={Payroll} />
              <Route exact path="/dashboard/tasks" component={Tasks} />
              <Route exact path="/dashboard/elearning" component={ELearning} />
            </Switch>
          </div>
        </Router>
      </ToggleColorMode>
    </Suspense>
  );
};

export default App;
