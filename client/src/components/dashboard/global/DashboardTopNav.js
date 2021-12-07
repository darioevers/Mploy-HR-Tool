import React, { useState } from "react";

// TRANSLATION IMPORTS
import LanguageSwitch from "../../../translations/languageSwitch";
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import DarkModeSwitch from "./DarkModeSwitch";
import SearchButton from "./SearchButton";
import RightDrawer from "./RightDrawer";

// IMAGE IMPORTS
import logo from "../../../img/logo/MPLOY_logo_small_dark.svg";

// MUI IMPORTS
import Box from "@mui/material/Paper";

function TopNav() {
  const role = localStorage.getItem("role");
  return (
    <div className="topnav_mainbox">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="top-nav-line"></div>

      <div className="search-button">
        <SearchButton />
      </div>
      <div className="language-switch">
        <Box
          sx={{
            boxShadow: "0",
            width: "100px",
            bgcolor: "transparent",
          }}
        >
          <LanguageSwitch />
        </Box>
      </div>
      <div className="darkmode-switch">
        <DarkModeSwitch />
      </div>

      <div className="settings-button">
        <RightDrawer />
      </div>

      {role === "admin" && <></>}
    </div>
  );
}
export default TopNav;
