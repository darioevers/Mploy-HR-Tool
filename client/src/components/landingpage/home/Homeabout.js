import React from "react";

// IMAGE IMPORTS
import Image from "../../../img/images/img_home_about.png";

// MUI IMPORTS
import Typography from '@mui/material/Typography';

// COMPONENT EXPORT
export default function Homeabout(props) {
  // EDIT STRINGS HERE
  const content = {
    // TOP SECTION
    '01_mainheading': 'Digitising HR.',
    '02_mainheading': 'Designed to make productivity an uncomplicated experience.',
    '01_body': 'From employee management to document tracking, HR task management and payroll - we offer the features that companies need to simplify their processes and save time.Mploy is user friendly and designed for the modern age.',
    ...props.content
  };
  return (
    <div className="homearea">
      <div className="homeabout_mainbox" style={{ bgcolor: "background.default" }}>

        <div className="homeabout_main_midbox">
          <div className="homeabout_main_midcontent">
            <Typography variant="h2" style={{ fontWeight: 700 }}>
              <span className="coloured_heading">{content['01_mainheading']}</span>
            </Typography>
            <Typography variant="h4" style={{ fontWeight: 500 }}>
              <span>{content['02_mainheading']}</span>
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem", textAlign: "justify" }}>
              <span>
                {content['01_body']}
              </span>
            </Typography>
          </div>
          <div className="homeabout_main_midimage">
            <img src={Image} alt="MPloy WebApp Screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
};