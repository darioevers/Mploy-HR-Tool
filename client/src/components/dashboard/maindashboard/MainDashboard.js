import React from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import Widgets from "./widgets/Widgets";
import Logout from "./Logout";

function MainDashboard({ history }) {
  return (
    <div className="maindashboard_area">
      <DashboardTopNav />
      <DashboardSideNav />
      <Widgets />
      <Logout history={history} />
    </div>
  );
}
export default MainDashboard;
