import React from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import Components from "../Components";

function MainDashboard() {
  return (
    <div className="maindashboard_area">
      <DashboardTopNav />
      <DashboardSideNav />
      <Components />
    </div>
  );
}
export default MainDashboard;
