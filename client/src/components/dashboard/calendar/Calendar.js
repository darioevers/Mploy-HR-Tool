import React from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import MiniCalendar from "react-calendar";

function Calendar() {
  return (
    <div className="calendar_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      <div className="calendar_wrapper">
        <div className="calendar_header">
          <h1>Calendar</h1>
        </div>
        <div className="calendar_mini_display">
          <MiniCalendar />
          <br />
        </div>
        <div className="calendar_big_display">
          <h1> Big Calendar</h1>
        </div>
        <div className="calendar_appointments">EVENTS</div>
      </div>
    </div>
  );
}
export default Calendar;
