import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";

// ICON IMPORTS
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import TodayIcon from "@material-ui/icons/Today";
import EuroIcon from "@material-ui/icons/Euro";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../img/logo/MPLOY_logo_small_white.svg";

const DashboardSideNav = (props) => {
  const { userdata, logout } = props;
  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive("active");
  };

  const [privateData, setPrivateData] = useState("");

  // const history = useHistory();
  // // if there is nothing in the local storage we immediatly
  // useEffect(() => {
  //   if (!localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }

  //   const fetchPrivateData = async () => {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  //       },
  //     };
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:5000/dashboard",
  //         config
  //       );
  //       console.log(data);
  //       setPrivateData(data.user);
  //     } catch (error) {
  //       console.log(error);
  //       localStorage.removeItem("authToken");
  //     }
  //   };
  //   fetchPrivateData();
  // }, [history]);
  // for logining out
  // const logoutHandler = () => {
  //   localStorage.removeItem("authToken");
  //   history.push("/");
  //   // should go to the /
  // };

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

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <>
      <div className="sidenav_mainbox">
        {/* employee info */}
        {privateData && (
          <div className="sidenav_employeeinfo">
            <div className="sidenav_logo">
              <img src={logo} />
            </div>
            <div className="sidenav_employeeinfo_image">
              <img
                src={`http://localhost:5000/${privateData?.bio?.photo}`}
                width="50"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "http://localhost:5000/uploads/error.jpg";
                }}
              />
            </div>

            <div className="sidenav_employeeinfo_details">
              <h1>
                {privateData?.bio?.firstName} {privateData?.bio?.lastName}
              </h1>

              <h4>{privateData?.contractInfo?.position}</h4>
            </div>
          </div>
        )}

        {/* sidenavlinks */}
        <div className="sidenav_links">
          <NavLink
            exact
            to="/dashboard"
            activeClassName="active"
            className="sidenav_link"
            onClick={handleClick}
          >
            <i>
              <DashboardIcon style={{ fontSize: "x-large" }} />
            </i>
            <Typography>{t("dashboardSidenav.menu01")}</Typography>
          </NavLink>

          <NavLink
            exact
            to="/dashboard/employeedata"
            activeClassName="active"
            className="sidenav_link"
            onClick={handleClick}
          >
            <i>
              {" "}
              <FolderOpenIcon />
            </i>
            <Typography>{t("dashboardSidenav.menu02")}</Typography>
            {/* <img src={iconbg} /> */}
            <div></div>
          </NavLink>

          <NavLink
            exact
            to="/dashboard/calendar"
            activeClassName="active"
            className="sidenav_link"
            onClick={handleClick}
          >
            <i>
              {" "}
              <TodayIcon />
            </i>
            <Typography>{t("dashboardSidenav.menu03")}</Typography>
            {/* <img src={iconbg} /> */}
            <div></div>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/payroll"
            activeClassName="active"
            className="sidenav_link"
            onClick={active}
          >
            <i>
              {" "}
              <EuroIcon />{" "}
            </i>
            <Typography>{t("dashboardSidenav.menu04")}</Typography>
            {/* <img src={iconbg} /> */}
            <div></div>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/tasks"
            activeClassName="active"
            className="sidenav_link"
            onClick={active}
          >
            <i>
              <FormatListBulletedIcon />
            </i>
            <Typography>{t("dashboardSidenav.menu05")}</Typography>
            {/* <img src={iconbg} /> */}
            <div></div>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/elearning"
            activeClassName="active"
            className="sidenav_link"
            onClick={active}
          >
            <i>
              {" "}
              <MenuBookIcon />
            </i>{" "}
            <Typography>
              {t("dashboardSidenav.menu06")}
            </Typography>
            {/* <img src={iconbg} /> */}
            <div></div>
          </NavLink>
        </div>
        <div className="logout_btn">
          <Button variant="outlined" onClick={logoutHandler}>{t("dashboardSidenav.menuButton01")}</Button>
        </div>
      </div>
    </>
  );
};

export default DashboardSideNav;
