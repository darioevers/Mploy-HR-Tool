import React from "react";

// COMPONENT IMPORTS
import Aboutproject from "./Aboutproject";
import Aboutteam from "./Aboutteam";
import Abouttools from "./Abouttools";
import Aboutintro from "./Aboutintro";
import Aboutinfo from "./Aboutinfo";

// NAVBAR + FOOTER IMPORT
import LandingpageTopnav from "../navigation/LandingpageTopnav";
import LandingpageFooter from "../navigation/LandingpageFooter";

// MUI IMPORTS
import Divider from "@mui/material/Divider";

// TABPANEL FUNCTION
const About = () => {
  return (
    <div>
      <LandingpageTopnav />
      <Aboutintro />
      <Aboutinfo />
      <Aboutproject />
      <Divider />
      <Abouttools />
      <Aboutteam />
      <LandingpageFooter />
    </div>
  );
};

export default About;
