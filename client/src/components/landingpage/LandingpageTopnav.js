import React, { useState } from "react";

const LandingpageTopnav = () => {
    return (
        <div className="landingpage_topnav_mainbox">
            <div className="landingpage_topnav_logobox">MPloy</div>
            <div className="landingpage_topnav_menulinks">
                <div className="landingpage_topnav_menulink">Solutions</div>
                <div className="landingpage_topnav_menulink">About</div>
            </div>
            <div className="landingpage_topnav_buttons">
                <div className="landingpage_topnav_contactbutton">
                    <button>Contact</button>
                </div>
                <div className="landingpage_topnav_loginbutton">
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default LandingpageTopnav;
