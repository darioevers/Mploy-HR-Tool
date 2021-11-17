import React from 'react';

// NAVBAR + FOOTER IMPORT
import LandingpageTopnav from '../LandingpageTopnav';
import LandingpageFooter from '../LandingpageFooter';

// IMAGE IMPORTS
import AboutCoverImg from "../../../img/images/aboutuscover.jpg";
import LogoDarkS from "../../../img/logo/MPLOY_logo_small_dark.svg"

// MUI IMPORTS
import Box from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// TABPANEL FUNCTION
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


// COMPONENT EXPORT
export default function About(props) {
    // EDIT STRINGS HERE
    const content = {
        '01_menu': 'COMPANY',
        '02_menu': 'ABOUT US',
        '03_menu': 'TECH USED',
        '04_menu': 'HOW WE WORK',
        '05_menu': 'MANIFESTO',
        '01_content': 'Item One',
        '02_content': 'Item Two',
        '03_content': 'Item Three',
        '04_content': 'Item four',
        '05_content': 'Item Five',
        ...props.content
    };

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
                margin: "0 auto",
                boxShadow: "0",
            }}>
                <div className="abouttopbox" style={{ margin: "0 auto" }}>
                    <img src={LogoDarkS} alt="Logo" style={{
                        width: "100px", height: "auto", position: "absolute",
                        right: "0",
                        left: "0",
                        top: "0",
                        bottom: "0",
                        margin: "auto auto",
                        zIndex: "1",
                    }} />
                    < img src={AboutCoverImg} alt="Office" style={{
                        width: "100vw", filter: "blur(6px)", zIndex: "0",
                    }} />
                </div>
            </Box>
            <div className="homearea" style={{ marginTop: "40px" }}>
                <Divider variant="middle" style={{ marginBottom: "25px" }} />
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', height: 240, boxShadow: "none" }}
                >
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', boxShadow: "none" }}
                    >
                        <Tab label={content['01_menu']} {...a11yProps(0)} />
                        <Tab label={content['02_menu']} {...a11yProps(1)} />
                        <Tab label={content['03_menu']} {...a11yProps(2)} />
                        <Tab label={content['04_menu']} {...a11yProps(3)} />
                        <Tab label={content['05_menu']} {...a11yProps(4)} />
                    </Tabs>
                    <TabPanel value={value} index={0} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        {content['01_content']}
                    </TabPanel>
                    <TabPanel value={value} index={1} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        {content['02_content']}
                    </TabPanel>
                    <TabPanel value={value} index={2} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        {content['03_content']}
                    </TabPanel>
                    <TabPanel value={value} index={3} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        {content['04_content']}
                    </TabPanel>
                    <TabPanel value={value} index={4} style={{ width: "100%", height: 240, boxShadow: "none" }}>
                        {content['05_content']}
                    </TabPanel>
                </Box>
            </div>
            <LandingpageFooter />
        </div >
    </Box >)
}