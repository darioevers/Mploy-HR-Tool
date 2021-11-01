import React, { useState } from "react";
import Calendar from "react-calendar";

function WidgetCalendar() {
  let date = new Date();

  //current month
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthNames[date.getMonth()];

  //current day_num
  let dayNum = date.getDate();

  //current day_name
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayName = dayNames[date.getDay()];

  // Calendar
  const [value, onChange] = useState(new Date());

  return (
    <div className="widget_calendar_mainbox">
      <div className="widget_calendar_today">
        <div className="widget_calendar_today_header">
          <h1>TODAY</h1>
        </div>
        <div className="widget_calendar_month">{month.toUpperCase()}</div>
        <div className="widget_calendar_day_number">{dayNum}</div>
        <div className="widget_calendar_day_name">{dayName.toUpperCase()}</div>
      </div>

      <div className="widget_calendar">
        <div className="widget_calendar_view">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="widget_calendar_bottom_border"></div>
      </div>
    </div>
  );
}

export default WidgetCalendar;
