import "./scss/main.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// LANDINGPAGE GLOBAL IMPORTS
import Landingpagetopnav from "./components/landingpage/LandingpageTopnav";

// LANDINGPAGE HOME IMPORTS


function App() {
  const [isActive, setActive] = useState("false");

  const themeToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={isActive ? "theme-light" : "theme-dark"}>
      <Router>
      </Router>
    </div>
  );
}
export default App;
