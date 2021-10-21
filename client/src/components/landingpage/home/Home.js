import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import Homeheader from './Homeheader';
import Homeservices from './Homeservices';
import Homecontact from './Homecontact';
import Homeabout from './Homeabout';


const Home = () => {
    return (
        <div className="homearea">
            <LandingpageTopnav />
            <Homeheader />
            <Homeservices />
            <Homecontact />
            <Homeabout />
        </div>
    )
}

export default Home;