import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MOBILE NAV IMPORT
import DashboardMobileNav from "./DashboardSideNav";

// IMAGE IMPORTS
import LogoDarkS from "../../../img/logo/MPLOY_logo_small_dark.svg";

// ICON IMPORTS
import LoginIcon from "@mui/icons-material/Login";

// DARK MODE TOGGLE IMPORT
import { ColorModeContext } from "../../theme/theme";

// MUI IMPORTS
import { makeStyles } from '@mui/styles';
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Paper";
import {
    Typography,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { createTheme } from '@mui/material/styles';

// ICON IMPORTS
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import TodayIcon from "@material-ui/icons/Today";
import EuroIcon from "@material-ui/icons/Euro";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../img/logo/MPLOY_logo_small_white.svg";


const NewDashboardSideNav = (props) => {
    const { userdata, logout } = props;
    const [active, setActive] = useState("");

    const handleClick = () => {
        setActive("active");
    };

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

    // NAVBAR ACTIVE BUTTONS
    const useStyles = makeStyles(theme => ({
        button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            background: "background.widgets",
            marginTop: 15,
            marginBottom: 15,
        },
        active: {
            background: "#d1795d",
            color: "#fff"
        },
    }));
    const classes = useStyles();

    // TOOLTIPS
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const themeBreakpoint = createTheme({
        breakpoints: {
            values: {
                xssm: 576,
            },
        },
    });

    // DARK THEME
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    // TRANSLATION
    const { t } = useTranslation();

    // SWITCH TO MOBILE NAVBAR COMPONENT
    const isMobile = useMediaQuery(themeBreakpoint.breakpoints.down("xssm"));

    return (
        <Container
            sx={{
                boxShadow: 0,
                height: "80vh"
            }}
        >
            {isMobile ? (
                <DashboardMobileNav />
            ) : (
                    <Box sx={{
                        height: "100%",
                        width: "100%",
                        maxWidth: "300px",
                        boxShadow: 1,
                        borderRadius: 3,
                        bgcolor: "background.widgets"
                    }}>
                        <Box
                            sx={{
                                boxShadow: 0,
                                bgcolor: "background.widgets",
                                height: "15%",
                                p: 2,
                                borderRadius: 0,
                                borderBottom: "#ebebeb 1px solid"
                            }}>
                            <Button
                                className={classes.button}
                                activeClassName={classes.active}
                                component={NavLink}
                                exact
                                to="/dashboard"
                                size="medium"
                                startIcon={<DashboardIcon />}
                            >
                                <Typography>
                                    {t("dashboardSidenav.menu01")}
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                boxShadow: 0,
                                bgcolor: "background.widgets",
                                height: "50%",
                                p: 2,
                            }}>
                            <Button
                                className={classes.button}
                                activeClassName={classes.active}
                                component={NavLink}
                                exact
                                to="/dashboard/employeedata"
                                size="medium"
                                startIcon={<FolderOpenIcon />}
                                variant="outlined"
                            >
                                {t("dashboardSidenav.menu02")}
                            </Button>
                            <Button
                                className={classes.button}
                                activeClassName={classes.active}
                                component={NavLink}
                                exact
                                to="/dashboard/calendar"
                                size="medium"
                                startIcon={<TodayIcon />}
                                variant="outlined"
                                color="success"
                            >
                                {t("dashboardSidenav.menu03")}
                            </Button>
                            <Tooltip
                                title={t("misc.inprogress")}
                            >
                                <span>
                                    <Button
                                        className={classes.button}
                                        activeClassName={classes.active}
                                        component={NavLink}
                                        exact
                                        to="/dashboard/payroll"
                                        size="medium"
                                        startIcon={<EuroIcon />}
                                        disabled
                                        variant="outlined"
                                    >
                                        <Typography variant="body1" color="text.primary">{t("dashboardSidenav.menu04")}</Typography>
                                    </Button>
                                </span>
                            </Tooltip>

                            <Tooltip
                                title={t("misc.inprogress")}
                            >
                                <span>
                                    <Button
                                        className={classes.button}
                                        activeClassName={classes.active}
                                        component={NavLink}
                                        exact
                                        to="/dashboard/tasks"
                                        size="medium"
                                        startIcon={<FormatListBulletedIcon />}
                                        disabled
                                        variant="outlined"
                                    >
                                        {t("dashboardSidenav.menu05")}
                                    </Button>
                                </span>
                            </Tooltip>
                            <Tooltip
                                title={t("misc.inprogress")}
                            >
                                <span>
                                    <Button
                                        className={classes.button}
                                        activeClassName={classes.active}
                                        component={NavLink}
                                        exact
                                        to="/dashboard/elearning"
                                        size="medium"
                                        startIcon={<MenuBookIcon />}
                                        disabled
                                        variant="outlined"
                                        color="text.primary"
                                    >
                                        {t("dashboardSidenav.menu06")}
                                    </Button>
                                </span>
                            </Tooltip>
                        </Box>
                        <Box
                            sx={{
                                boxShadow: 0,
                                bgcolor: "background.widgets",
                                height: "30%",
                                p: 2,
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Box sx={{
                                boxShadow: 0,
                                bgcolor: "background.widgets",
                            }}>
                                <img
                                    src={`http://localhost:5000/${privateData?.bio?.photo}`}
                                    width="50"
                                    onError={(e) => {
                                        e.target.onError = null;
                                        e.target.src = "http://localhost:5000/uploads/error.jpg";
                                    }}
                                />
                            </Box>
                            <Box sx={{ boxShadow: 0, bgcolor: "background.widgets", mb: 5 }}>
                                <Typography variant="body1">{privateData?.bio?.firstName} {privateData?.bio?.lastName}</Typography>
                                <Typography variant="caption" color="text.secondary">{privateData?.contractInfo?.position}</Typography>
                            </Box>
                            <Box sx={{ boxShadow: 0, bgcolor: "background.widgets" }}>
                                <Button variant="outlined" onClick={logoutHandler}>{t("dashboardSidenav.menuButton01")}</Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                boxShadow: 0,
                                bgcolor: "background.widgets",
                                height: "5%",
                                textAlign: "center"
                            }}>
                            <Typography variant="caption"><Box sx={{ boxShadow: 0, bgcolor: "background.widgets", color: "text.gray" }}>Copyright © 2021 by MPloy</Box></Typography>
                        </Box>
                    </Box>
                )
            }
        </Container >
    );
};

export default NewDashboardSideNav;
