import React from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import Widgets from "./widgets/Widgets";

function MainDashboard() {
  return (
    <div className="maindashboard_area">
      <DashboardTopNav />
      <DashboardSideNav />
      <Widgets />
    </div>
  );
}
export default MainDashboard;
