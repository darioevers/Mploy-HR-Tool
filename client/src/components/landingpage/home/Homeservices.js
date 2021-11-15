import React from 'react';
import HomeServicesGraphic from "../../../img/graphics/browser-mockup.png";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SchoolIcon from '@mui/icons-material/School';
import { NavLink, Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Homeservices = () => {
    return (
        <div className="homeservices_mainbox">
            <div className="homeservices_main_topbox">
                <img src={HomeServicesGraphic}></img>
            </div>
            <div className="homeservices_main_midbox">
                <Typography variant="h2" style={{ fontWeight: 700 }}>
                    <span className="coloured_heading">Employ with MPloy.</span>
                    <br></br>
                    <span>Scale your team with thoughtful solutions.</span>
                </Typography>
                <Typography variant="h5" style={{ marginTop: "1rem" }}>
                    <span>Planning, tracking and delivering your team’s best work has never been easier. Manage everything in one Workspace with MPloy and get started within minutes. Try it today for free!</span>
                </Typography>
                <Typography variant="h5" style={{ marginTop: "1rem" }}>
                    <Stack direction="row" spacing={3}>
                        <Link to={"/login"}>
                            <Button>Sign Up for MPloy</Button>
                        </Link>
                        <Link to={"/contact"}>
                            <Button>Get In Touch</Button>
                        </Link>
                    </Stack>
                </Typography>
            </div>
            <div className="homeservices_main_botbox">
                <Box sx={{ width: '100%' }}>
                    <Grid container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item>
                            <Item>
                                <AccountCircleIcon></AccountCircleIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Employee Data</Typography>
                            </Item>
                        </Grid>
                        <Grid item>
                            <Item>
                                <EventIcon></EventIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Calendar</Typography>
                            </Item>
                        </Grid>
                        <Grid item>
                            <Item>
                                <AnnouncementIcon></AnnouncementIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Announcements</Typography>
                            </Item>
                        </Grid>
                        <Grid item>
                            <Item>
                                <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Payroll</Typography>
                            </Item>
                        </Grid>
                        <Grid item>
                            <Item>
                                <AddTaskIcon></AddTaskIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">Tasks</Typography>
                            </Item>
                        </Grid>
                        <Grid item>
                            <Item>
                                <SchoolIcon></SchoolIcon>
                                <br></br>
                                <Typography className="homeservices_grid_text">E-Learning</Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Homeservices;