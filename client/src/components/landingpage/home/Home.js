import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import Homeheader from './Homeheader';
import Homeservices from './Homeservices';
import Homecontact from './Homecontact';
import Homeabout from './Homeabout';
import Homefooter from '../LandingpageFooter';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Paper';


const Home = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.darker',
                borderRadius: '0px'
            }}
        >
            <div>
                <LandingpageTopnav />
                <div className="homearea">
                    <Homeheader />
                    <Homeservices />
                    <Homecontact />
                    <Homeabout />
                </div>
                <Homefooter />
            </div >
        </Box>
    )
}


export default Home;
