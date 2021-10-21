import React, { useState } from "react";
import Themetoggle from "../components/Themetoggle";

const LandingpageTopnav = () => {
    return (
        <div className="ladningpage_topnav_mainbox">
            <div className="themetoggle_button">
                <Themetoggle />
            </div>
        </div>
    );
};

export default LandingpageTopnav;
