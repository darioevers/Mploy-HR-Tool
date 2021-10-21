import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import Homeheader from './Homeheader';
import Homeservices from './Homeservices';
import Homecontact from './Homecontact';
import Homeabout from './Homeabout';
import Homefooter from '../LandingpageFooter';


const Home = () => {
    return (
        <div>
            <LandingpageTopnav />
            <div className="homearea">
                <Homeheader />
                <Homeservices />
                <Homecontact />
                <Homeabout />
            </div>
            <Homefooter />
        </div>
    )
}


export default Home;
