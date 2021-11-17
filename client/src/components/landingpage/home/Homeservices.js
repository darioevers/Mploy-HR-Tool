import React from 'react';
import { Link } from "react-router-dom";

// IMAGE IMPORTS
import HomeServicesGraphic from "../../../img/graphics/06_Digital_World.svg";

// ICON IMPORTS
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// MUI IMPORTS
import { experimentalStyled as styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// GRID ITEM
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// COMPONENT EXPORT
export default function Homeservices(props) {
    // EDIT STRINGS HERE
    const content = {
        // TOP SECTION
        '01_mainheading': 'Employ with MPloy.',
        '02_mainheading': 'Scale your team with thoughtful solutions.',
        '01_body': 'Planning, tracking and delivering your team’s best work has never been easier. Manage everything in one Workspace with MPloy and get started within minutes. Try it today for free!',
        '01_button': 'Sign Up for MPloy',
        '02_button': 'Get In Touch',
        // BOTTOM SECTION
        ...props.content
    };
    return (
        <div>
            <div className="homearea">
                <div className="homeservices_mainbox">
                    <div className="homeservices_main_topbox">
                    </div>
                    <div className="homeservices_main_midbox">
                        <div className="homeservices_main_midcontent">
                            <Typography variant="h2" style={{ fontWeight: 700 }}>
                                <span className="coloured_heading">{content['01_mainheading']}</span>
                                <br></br>
                                <span>{content['02_mainheading']}</span>
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: "1rem", textAlign: "justify" }}>
                                <span>{content['01_body']}</span>
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                                <Stack direction="row" spacing={3}>
                                    <Link to={"/login"}>
                                        <Button>{content['01_button']}</Button>
                                    </Link>
                                    <Link to={"/contact"}>
                                        <Button>{content['02_button']}</Button>
                                    </Link>
                                </Stack>
                            </Typography>
                        </div>
                        <div className="homeservices_main_midimage">
                            <img src={HomeServicesGraphic} alt="Circle Graphic"></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className="homeservices_gridbox">
                <Box sx={{
                    flexGrow: 1,
                    boxShadow: "0",
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <Item sx={{ height: "400px", borderRadius: "0", boxShadow: "none", bgcolor: "background.lighterThree" }}>
                                <AccountCircleIcon></AccountCircleIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Employee Data</Typography>

                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6} >
                            <Item sx={{ height: "400px", borderRadius: "0", boxShadow: "none", bgcolor: "background.lighterThree" }}>
                                <EventIcon></EventIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Calendar</Typography>
                                   4</Item>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6} >
                            <Item sx={{ height: "400px", borderRadius: "0", boxShadow: "none", bgcolor: "background.lighterThree" }}>
                                <AnnouncementIcon></AnnouncementIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Announcements</Typography>

                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <Item sx={{ height: "400px", borderRadius: "0", boxShadow: "none", bgcolor: "background.lighterThree" }}>
                                <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Payroll</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Item sx={{ height: "400px", borderRadius: "0", boxShadow: "none", bgcolor: "background.lighterThree" }}>
                                <Typography variant="h5">Digitising your HR management doesn’t need to be
                hard and Mploy is here to streamline that process.</Typography>
                HR Management should be seamless, intuitive and easy.
                Here at Mploy we strive to deliver innovative solutions with our
            modern approach to HR Management. We want to make HR management an
            experience, rather than a task. Sign up and let us show you how.
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>

    )
}