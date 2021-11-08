import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ColorModeContext } from "../theme/theme";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Paper";
import LoginIcon from "@mui/icons-material/Login";
import LogoDarkS from "../../img/logo/MPLOY_logo_small_dark.svg";

const LandingpageTopnav = () => {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Paper elevation={0}>
            <div className="landingpage_topnav_backgroundbox">
                <Box
                    id="landingpagetopnavbox"
                    sx={{
                        bgcolor: "landingnavbar.main",
                        borderRadius: "0px",
                    }}
                >
                    <div className="landingpage_topnav_mainbox">
                        <div className="landingpage_topnav_logobox">
                            <Link to={"/"}>
                                <img src={LogoDarkS}></img>
                            </Link>
                        </div>
                        <div className="landingpage_topnav_menulinks">
                            <Link to={"/solutions"} style={{ color: "text.primary" }}>
                                <div className="landingpage_topnav_menulink">Solutions</div>
                            </Link>
                            <Link to={"/about"}>
                                <div className="landingpage_topnav_menulink">About</div>
                            </Link>
                        </div>
                        <div className="landingpage_topnav_buttons">
                            <IconButton
                                sx={{ ml: 1 }}
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                            >
                                {theme.palette.mode === "dark" ? (
                                    <Brightness7Icon />
                                ) : (
                                        <Brightness4Icon />
                                    )}
                            </IconButton>
                            <Link to={"/contact"}>
                                <div className="landingpage_topnav_contactbutton">
                                    <Button variant="outlined">Contact</Button>
                                </div>
                            </Link>
                            <div className="landingpage_topnav_loginbutton">
                                <Link to={"/login"}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<LoginIcon />}
                                    >
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
            <div className="landingpage_topnav_fillerbox"></div>
        </Paper >
    );
};

export default LandingpageTopnav;
