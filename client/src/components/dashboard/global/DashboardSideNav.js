import * as React from "react";
import { NavLink, useHistory } from "react-router-dom";

//icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import TodayIcon from "@material-ui/icons/Today";
import EuroIcon from "@material-ui/icons/Euro";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import { useState, useEffect } from "react";
import axios from "axios";

const DashboardSideNav = () => {
  const [privateData, setPrivateData] = useState("");

  const history = useHistory();
  // if there is nothing in the local storage we immediatly
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get(
          "http://localhost:5000/dashboard",
          config
        );
        console.log(data);
        setPrivateData(data.user);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("authToken");
      }
    };
    fetchPrivateData();
  }, [history]);
  // for logining out
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/");
    // should go to the /
  };

  return (
    <>
      {privateData && (
        <div className="sidenav_mainbox">
          {/* employee info */}
          <div className="sidenav_employeeinfo">
            <div className="sidenav_employeeinfo_image">
              <img
                src={`http://localhost:5000/${privateData.bio.photo}`}
                width="50"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "http://localhost:5000/uploads/error.jpg";
                }}
              />
            </div>
            <div className="sidenav_employeeinfo_details">
              <h1>{privateData.bio.firstName}</h1>
              <h1>{privateData.bio.lastName}</h1>
              <h4>{privateData.contractInfo?.position}</h4>
            </div>
          </div>

          {/* sidenavlinks */}
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
                <FolderOpenIcon />
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

          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </>
  );
};

export default DashboardSideNav;
