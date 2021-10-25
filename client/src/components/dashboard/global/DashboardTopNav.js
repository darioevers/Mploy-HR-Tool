import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchButton from "./SearchButton";

function TopNav() {
  return (
    <div className="topnav_mainbox">
      <div className="logo">
        <h1>Mploy</h1>
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
      </div>
    </div>
  );
}
export default TopNav;
