import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

// TRANSLATION IMPORTS
import LanguageSwitch from "../../../translations/languageSwitch";
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
    const classes = makeStyles({
        button: {
            "&.active": {
                bgcolor: "background.default"
            },
        },
    });

    // DARK THEME
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    // TRANSLATION
    const { t } = useTranslation();

    // SWITCH TO MOBILE NAVBAR COMPONENT
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container
            sx={{
                boxShadow: 0,
            }}
        >
            {isMobile ? (
                <DashboardMobileNav />
            ) : (
                    <Box sx={{
                        height: "100%",
                        width: "100%",
                        boxShadow: 1,
                        borderRadius: 3,
                    }}>

                    </Box>
                )}
        </Container>
    );
};

export default NewDashboardSideNav;
