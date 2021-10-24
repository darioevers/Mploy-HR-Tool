import * as React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import TodayIcon from "@material-ui/icons/Today";
import EuroIcon from "@material-ui/icons/Euro";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const DashboardSideNav = () => {
  return (
    <div className="sidenav_mainbox">
      <div className="sidenav_employeeinfo">
        <div className="sidenav_employeeinfo_image"></div>
        <div className="sidenav_employeeinfo_details">
          <h1>John Smith</h1>
          <h4>HR Specialist</h4>
          <select>
            <option>Available</option>
            <option>Away</option>
            <option>Offline</option>
          </select>
        </div>
      </div>

      <div className="sidenav_links">
        <div className="sidenav_link_wrapper">
          <NavLink exact to="/dashboard" className="sidenav_link">
            <DashboardIcon /> <p>Dashboard</p>
          </NavLink>
        </div>
        <NavLink exact to="/dashboard/employeedata" className="sidenav_link">
          <FolderOpenIcon />
          <p>Employee Data</p>
        </NavLink>
        <NavLink exact to="/dashboard/calendar" className="sidenav_link">
          <TodayIcon />
          <p>Calendar</p>
        </NavLink>
        <NavLink exact to="/dashboard/payroll" className="sidenav_link">
          <EuroIcon />
          <p> Payroll </p>
        </NavLink>
        <NavLink exact to="/dashboard/tasks" className="sidenav_link">
          <FormatListBulletedIcon />
          <p> Tasks </p>
        </NavLink>
        <NavLink exact to="/dashboard/elearning" className="sidenav_link">
          <MenuBookIcon /> <p>E-Learning</p>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSideNav;
