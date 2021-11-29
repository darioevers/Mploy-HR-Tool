import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// IMAGE IMPORTS
import Image from "../../../img/images/img_home_about.png";

// MUI IMPORTS
import Typography from "@mui/material/Typography";

// COMPONENT EXPORT
export default function Homeabout(props) {
  // languageSwitch FUNCTION
  const { t } = useTranslation();
  return (
    <div className="homearea">
      <div
        className="homeabout_mainbox"
        style={{ bgcolor: "background.default" }}
      >
        <div className="homeabout_main_midbox">
          <div className="homeabout_main_midcontent">
            <Typography variant="h2" style={{ fontWeight: 700 }}>
              <span className="coloured_heading">
                {t("landingHomeAbout.title01")}
              </span>
            </Typography>
            <Typography variant="h4" style={{ fontWeight: 500 }}>
              {t("landingHomeAbout.title02")}
            </Typography>
            <Typography
              variant="h5"
              style={{ marginTop: "1rem", textAlign: "justify" }}
            >
              {t("landingHomeAbout.body01")}
            </Typography>
          </div>
          <div className="homeabout_main_midimage">
            <img src={Image} alt="MPloy WebApp Screenshot" />
          </div>
        </div>
      </div>
    </div> 
  );
}
