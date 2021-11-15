import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import LandingpageFooter from '../LandingpageFooter';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Paper';
import AboutCoverImg from "../../../img/images/aboutuscover.jpg";
import LogoDarkS from "../../../img/logo/MPLOY_logo_small_dark.svg"
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const About = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<Box
        sx={{
            bgcolor: 'background.default',
            borderRadius: '0px'
        }}
    >
        <div>
            <LandingpageTopnav />
            <Box sx={{
                background: "primary.darker",
                margin: "0 auto"
            }}>
                <div className="abouttopbox" style={{ position: "relative", margin: "0 auto" }}>
                    <img src={LogoDarkS} style={{
                        width: "100px", height: "auto", position: "absolute", zIndex: "10", textAlign: "center", top: "50% ", left: "50% ",
                    }} />
                    < img src={AboutCoverImg} style={{ width: "100vw", filter: "blur(6px)" }} />
                </div>
            </Box>
            <div className="homearea" style={{ marginTop: "40px" }}>
                <Divider variant="middle" style={{ marginBottom: "25px" }} />
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', height: 240, boxShadow: "none" }}
                >
                    <Tabs
                        orientation="vertical"
                        // variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', boxShadow: "none" }}
                    >
                        <Tab label="Company" {...a11yProps(0)} />
                        <Tab label="About Us" {...a11yProps(1)} />
                        <Tab label="Tech used" {...a11yProps(2)} />
                        <Tab label="How we work" {...a11yProps(3)} />
                        <Tab label="Manifesto" {...a11yProps(4)} />
                    </Tabs>
                    <TabPanel value={value} index={0} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        Item Five
                    </TabPanel>
                </Box>
            </div>
            <LandingpageFooter />
        </div >
    </Box>)
}

export default About;