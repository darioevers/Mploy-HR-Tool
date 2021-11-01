import * as React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ColorModeContext } from "../theme/theme";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons//Brightness7";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Paper";
import LoginIcon from "@mui/icons-material/Login";

const LandingpageTopnav = () => {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Paper elevation={0}>
      <div className="landingpage_topnav_backgroundbox">
        <Box
          sx={{
            bgcolor: "landingnavbar.main",
            borderRadius: "0px",
          }}
        >
          <div className="landingpage_topnav_mainbox">
            <div className="landingpage_topnav_logobox">
              <a href="/">MPloy</a>
            </div>
            <div className="landingpage_topnav_menulinks">
              <div className="landingpage_topnav_menulink">Solutions</div>
              <div className="landingpage_topnav_menulink">About</div>
            </div>
            <div className="landingpage_topnav_buttons">
              <div className="landingpage_topnav_contactbutton">
                <Button variant="outlined">Contact</Button>
              </div>
              <div className="landingpage_topnav_loginbutton">
                <NavLink exact to="/login" className="sidenav_button">
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<LoginIcon />}
                  >
                    Login
                  </Button>
                </NavLink>
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
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Paper>
  );
};

export default LandingpageTopnav;
