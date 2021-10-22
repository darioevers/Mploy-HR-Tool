import React from "react";
import Image from "../../../img/img_home_about.png";

const Homeabout = () => {
  return (
    <div className="homeabout_mainbox">
      <div className="homeabout_header">
        <h1>HR Management should be seamless, intuitive and easy.</h1>
        <h3>
          Here at Mploy we strive to deliver this experience with our modern
          approach to HR Management. We want to make HR management an
          experience, rather than a task.
        </h3>
        <br />
        <div>
          Sign up and experience firsthand the edge you have with Mploy.
        </div>
      </div>
      <div className="homeabout_content">
        <div className="homeabout_content_left">
          <h2>What do we do? </h2>

          <h3>
            Mploy is an HR Management platform designed to make productivity an
            uncomplicated experience.
          </h3>
          <h4>
            From employee management to document tracking, HR task management
            and payroll - we offer the features that companies need to simplify
            their processes and save time. Mploy is user friendly and designed
            for the modern age. Digitising your HR management doesn’t need to be
            hard and Mploy is here to streamline that process.
          </h4>
        </div>
        <div className="homeabout_content_right">
          <img src={Image} />
        </div>
      </div>
    </div>
  );
};

export default Homeabout;
