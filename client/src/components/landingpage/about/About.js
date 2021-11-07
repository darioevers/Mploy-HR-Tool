import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import LandingpageFooter from '../LandingpageFooter';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Paper';

const About = () => {
    return (<Box
        sx={{
            bgcolor: 'background.darker',
            borderRadius: '0px'
        }}
    >
        <div>
            <LandingpageTopnav />
            <div className="homearea">
                Test
            </div>
            <LandingpageFooter />
        </div >
    </Box>)
}

export default About;