import * as React from "react";
import { Link } from "react-router-dom";

// IMAGE IMPORTS
import LogoDarkS from "../../img/logo/MPLOY_logo_small_dark.svg";

// ICON IMPORTS
import LoginIcon from "@mui/icons-material/Login";

// DARK MODE TOGGLE IMPORT
import { ColorModeContext } from "../theme/theme";

// MUI IMPORTS
import { useTheme } from "@mui/material/styles";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Paper";
import Typography from '@mui/material/Typography';

const LandingpageTopnav = () => {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box sx={{
            boxShadow: "0"
        }}>
            <div className="landingpage_topnav_backgroundbox">
                <Box
                    id="landingpagetopnavbox"
                    sx={{
                        bgcolor: "landingpagenavbar.main",
                        borderRadius: "0px",
                        backdropFilter: "blur(4px)",
                        boxShadow: "0"
                    }}
                >
                    <div className="landingpage_topnav_mainbox">
                        <div className="landingpage_topnav_logobox">
                            <Link to={"/"} color="inherit">
                                <img src={LogoDarkS} alt="Logo"></img>
                            </Link>
                        </div>
                        <div className="landingpage_topnav_menulinks">

                            <Link to={"/solutions"} color="inherit">
                                <Typography variant="h6" id="landingpage_navlink" fontWeight="400">
                                    Solutions
                                </Typography>
                            </Link>

                            <Link to={"/about"} color="inherit">
                                <Typography variant="h6" id="landingpage_navlink" fontWeight="400">
                                    About
                                </Typography>
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
                            <div className="landingpage_topnav_contactbutton">
                                <Link to={"/contact"}>
                                    <Button variant="outlined">Contact</Button>
                                </Link>
                            </div>
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
        </Box >
    );
};

export default LandingpageTopnav;
