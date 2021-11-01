import React from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

import TopNav from "../global/DashboardTopNav";

function Calendar() {
  return (
    <div className="calendar_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      <h1>Calendar</h1>
    </div>
  );
}
export default Calendar;
