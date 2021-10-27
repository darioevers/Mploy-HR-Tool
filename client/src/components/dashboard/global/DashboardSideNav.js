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
        <NavLink
          exact
          to="/dashboard"
          activeClassName="active"
          className="sidenav_link"
        >
          <i>
            <DashboardIcon style={{ fontSize: "x-large" }} />
          </i>
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          exact
          to="/dashboard/employeedata"
          activeClassName="active"
          className="sidenav_link"
        >
          <i>
            {" "}
            <FolderOpenIcon style={{ fontWeight: "1000", color: "white" }} />
          </i>
          <p>Employee Data</p>
        </NavLink>
        <NavLink
          exact
          to="/dashboard/calendar"
          activeClassName="active"
          className="sidenav_link"
        >
          <i>
            {" "}
            <TodayIcon />
          </i>
          <p>Calendar</p>
        </NavLink>
        <NavLink
          exact
          to="/dashboard/payroll"
          activeClassName="active"
          className="sidenav_link"
        >
          <i>
            {" "}
            <EuroIcon />{" "}
          </i>
          <p> Payroll </p>
        </NavLink>
        <NavLink
          exact
          to="/dashboard/tasks"
          activeClassName="active"
          className="sidenav_link"
        >
          <i>
            {" "}
            <FormatListBulletedIcon />
          </i>
          <p> Tasks </p>
        </NavLink>
        <NavLink
          exact
          to="/dashboard/elearning"
          activeClassName="active"
          className="sidenav_link"
        >
          <i>
            {" "}
            <MenuBookIcon />
          </i>{" "}
          <p>E-Learning</p>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSideNav;
