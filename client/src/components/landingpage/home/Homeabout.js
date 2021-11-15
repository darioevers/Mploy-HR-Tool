import React from "react";
import Image from "../../../img/img_home_about.png";
import Typography from '@mui/material/Typography';

const Homeabout = () => {
  return (
    <div className="homeabout_mainbox" style={{ bgcolor: "background.default" }}>
      <div className="homeabout_header">
        <h1>HR Management should be seamless, intuitive and easy.</h1>
        <h3>
          Here at Mploy we strive to deliver innovative solutions with our
          modern approach to HR Management. We want to make HR management an
          experience, rather than a task. Sign up and let us show you how.
        </h3>
      </div>
      <div className="homeabout_content">
        <div className="homeabout_content_left">
          <Typography variant="h2" style={{ fontWeight: 700 }}>
            <span className="coloured_heading">What do we do?</span>
          </Typography>
          <Typography variant="h5">
            <span>Mploy is an HR Management platform designed to make productivity an
            uncomplicated experience.</span>
          </Typography>
          <Typography style={{ marginTop: "1rem" }}>
            <span>From employee management to document tracking, HR task management
            and payroll - we offer the features that companies need to simplify
            their processes and save time. Mploy is user friendly and designed
            for the modern age. Digitising your HR management doesn’t need to be
            hard and Mploy is here to streamline that process.</span>
          </Typography>
        </div>
        <div className="homeabout_content_right">
          <img src={Image} />
        </div>
      </div>
    </div>
  );
};

export default Homeabout;