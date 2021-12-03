import React from "react";
import { Link } from "react-router-dom";

// TRANSLATION IMPORTS
import LanguageSwitch from "../../../translations/languageSwitch";
import { useTranslation } from "react-i18next";

// MOBILE NAV IMPORT
import LandingpageMobileNav from "./LandingpageMobileNav";

// IMAGE IMPORTS
import LogoDarkS from "../../../img/logo/MPLOY_logo_small_dark.svg";

// ICON IMPORTS
import LoginIcon from "@mui/icons-material/Login";

// DARK MODE TOGGLE IMPORT
import { ColorModeContext } from "../../theme/theme";

// MUI IMPORTS
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Paper";
import { Typography, useTheme, useMediaQuery } from "@material-ui/core";

const LandingpageTopnav = () => {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        boxShadow: "0",
      }}
    >
      {isMobile ? (
        <LandingpageMobileNav />
      ) : (
        <div className="landingpage_topnav_backgroundbox">
          <Box
            id="landingpagetopnavbox"
            sx={{
              bgcolor: "landingpagenavbar.main",
              borderRadius: "0px",
              backdropFilter: "blur(4px)",
              boxShadow: "0",
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
                  <Typography variant="button" id="landingpage_navlink">
                    {t("landingNavbar.link01")}
                  </Typography>
                </Link>

                <Link to={"/about"} color="inherit">
                  <Typography variant="button" id="landingpage_navlink">
                    {t("landingNavbar.link02")}
                  </Typography>
                </Link>
              </div>
              <div className="landingpage_topnav_buttons">
                <LanguageSwitch />
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
                    <Button variant="outlined">
                      {t("landingNavbar.button01")}
                    </Button>
                  </Link>
                </div>
                <div className="landingpage_topnav_loginbutton">
                  <Link to={"/login"}>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<LoginIcon />}
                    >
                      {t("landingNavbar.button02")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default LandingpageTopnav;
