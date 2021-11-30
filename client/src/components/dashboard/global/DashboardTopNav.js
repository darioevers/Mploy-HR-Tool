import React, { useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchButton from "./SearchButton";
// IMAGE IMPORTS

import RightDrawer from "./RightDrawer";

function TopNav() {
  const role = localStorage.getItem("role");
  return (
    <div className="topnav_mainbox">
      <div className="logo">
        <img src={require("../../../img/logo/MPLOY_logo_small_white.svg")} />
      </div>
      <div className="top-nav-line"></div>
      <SearchButton />
      <div className="language_switch">
        <div className="eng_wrapper">
          <p>ENG</p>
        </div>
        <div className="deu_wrapper">
          <p>DEU</p>
        </div>
      </div>
      <div className="darkmode_switch">
        <DarkModeSwitch />

        <div className="settings_button">
          <RightDrawer />
        </div>
      </div>
      {role === "admin" && <></>}
    </div>
  );
}
export default TopNav;
