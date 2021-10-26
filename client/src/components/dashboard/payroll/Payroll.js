import React from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

function Payroll() {
  return (
    <div className="payroll_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      <h1>Payroll</h1>
    </div>
  );
}
export default Payroll;
