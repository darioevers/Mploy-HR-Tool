import React from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

function EmployeeData() {
  return (
    <div className="employeedata_mainbox">
      <DashboardTopNav />

      <DashboardSideNav />

      <h1>Employee Data</h1>
    </div>
  );
}
export default EmployeeData;
