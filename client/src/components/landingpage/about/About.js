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
            <Box sx={{
                background: "primary.darker"
            }}>
                <div className="abouttopbox">
                    Test
                </div>
            </Box>
            <div className="homearea">

            </div>
            <LandingpageFooter />
        </div >
    </Box>)
}

export default About;