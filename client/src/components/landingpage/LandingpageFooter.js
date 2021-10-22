import React from "react";

const Homefooter = () => {
  return (
    <div className="homefooter_mainbox">
      <div className="homefooter_topic">
        <div className="homefooter_subtopic_1">
          <div className="homefooter_subtopic_header">LOGO</div>
          <div>Sign Up</div>
          <div>Book a Demo</div>
        </div>

        <div className="homefooter_subtopic_2">
          <div className="homefooter_subtopic_header">Product</div>
          <div>Features</div>
          <div>Pricing</div>
          <div>Security</div>
        </div>

        <div className="homefooter_subtopic_3">
          <div className="homefooter_subtopic_header">Company</div>
          <div>About Mploy</div>
          <div>Careers</div>
        </div>

        <div className="homefooter_subtopic_4">
          <div className="homefooter_subtopic_header">Support</div>
          <div>+ 49 1111 098</div>
          <div>info@mploy.com</div>
        </div>
      </div>

      <div className="homefooter_topic_2">
        <div>SOCIAL MEDIA CHANNELS</div>
      </div>

      <hr />

      <div className="homefooter_topic_3">
        <div>Privacy Policy</div>
        <div>Legal Notice </div>
        <div> Terms and Conditions</div>
      </div>
    </div>
  );
};

export default Homefooter;
