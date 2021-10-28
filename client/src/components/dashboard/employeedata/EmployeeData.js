import * as React from "react";
import { NavLink } from "react-router-dom";

import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

function EmployeeData() {
  return (
    <div className="employeedata_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      <h1>Employee Data</h1>
      <NavLink
        exact
        to="/dashboard/employeedata/addemployee"
        activeClassName="active"
        className="sidenav_link"
      >
        <button>Add Employee</button>
      </NavLink>
    </div>
  );
}
export default EmployeeData;
