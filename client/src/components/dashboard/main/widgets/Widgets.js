import React from "react";
import WidgetAnnouncements from "./WidgetAnnouncements";
import WidgetApplications from "./WidgetApplications";
import WidgetBirthdays from "./WidgetBirthdays";
import WidgetCalendar from "./WidgetCalendar";
import WidgetHolidays from "./WidgetHolidays";
import WidgetHomeOffice from "./WidgetHomeOffice";
import WidgetSickLeave from "./WidgetSickleave";
import WidgetTasks from "./WidgetTasks";
import WidgetTeam from "./WidgetTeam";

function Widgets() {
  return (
    <div className="components_mainbox">
      <WidgetAnnouncements />
      <WidgetApplications />
      <WidgetBirthdays />
      <WidgetCalendar />
      <WidgetHolidays />
      <WidgetHomeOffice />
      <WidgetSickLeave />
      <WidgetTasks />
      <WidgetTeam />
    </div>
  );
}
export default Widgets;
