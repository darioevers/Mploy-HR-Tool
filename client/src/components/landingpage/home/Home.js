import React from 'react';

// COMPONENT IMPORTS
import LandingpageTopnav from '../LandingpageTopnav';
import Homeheader from './Homeheader';
import Homeservices from './Homeservices';
import Homecontact from './Homecontact';
import Homeabout from './Homeabout';
import Homefooter from '../LandingpageFooter';

// MUI IMPORTS
import Box from '@mui/material/Paper';


const Home = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                borderRadius: '0px',
                boxShadow: "0",
            }}
        >
            <div>
                <LandingpageTopnav />
                <Homeheader />
                <Homeservices />
                <Homeabout />
                <Homecontact />
                <Homefooter />
            </div >
        </Box>
    )
}


export default Home;
