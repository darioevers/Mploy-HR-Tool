import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

const LandingpageTopnav = () => {
    return (
        <div className="landingpage_topnav_backgroundbox">
            <div className="landingpage_topnav_mainbox">
                <div className="landingpage_topnav_logobox">
                    <a href="/">MPloy</a>
                </div>
                <div className="landingpage_topnav_menulinks">
                    <div className="landingpage_topnav_menulink">Solutions</div>
                    <div className="landingpage_topnav_menulink">About</div>
                </div>
                <div className="landingpage_topnav_buttons">
                    <div className="landingpage_topnav_contactbutton">
                        <button>Contact</button>
                    </div>
                    <div className="landingpage_topnav_loginbutton">
                        <NavLink exact to="/login" className="sidenav_button">
                            <button>Login</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingpageTopnav;
