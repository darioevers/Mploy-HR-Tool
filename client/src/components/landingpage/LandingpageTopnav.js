import * as React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';

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
                        <Button variant="outlined">Contact</Button>
                    </div>
                    <div className="landingpage_topnav_loginbutton">
                        <NavLink exact to="/login" className="sidenav_button">
                            <Button variant="contained">Login</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingpageTopnav;
