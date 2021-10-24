import * as React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const DashboardSideNav = () => {
  return (
    <div className="sidenav_mainbox">
      <NavLink exact to="/dashboard" className="sidenav_button">
        <Button variant="contained">Dashboard</Button>
      </NavLink>
      <NavLink exact to="/dashboard/employeedata" className="sidenav_button">
        <Button variant="contained">EmployeeData</Button>
      </NavLink>
      <NavLink exact to="/dashboard/calendar" className="sidenav_button">
        <Button variant="contained">Calendar</Button>
      </NavLink>
      <NavLink exact to="/dashboard/payroll" className="sidenav_button">
        <Button variant="contained">Payroll</Button>
      </NavLink>
      <NavLink exact to="/dashboard/tasks" className="sidenav_button">
        <Button variant="contained">Tasks</Button>
      </NavLink>
      <NavLink exact to="/dashboard/elearning" className="sidenav_button">
        <Button variant="contained">E-Learning</Button>
      </NavLink>
    </div>
  );
};

export default DashboardSideNav;
