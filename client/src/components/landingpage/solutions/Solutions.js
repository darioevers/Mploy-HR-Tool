import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import LandingpageFooter from '../LandingpageFooter';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const Solutions = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                borderRadius: '0px'
            }}
        >
            <LandingpageTopnav />

            <div className="solutions_header">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        boxShadow: "none",
                        justifyContent: 'center',
                        clipPath: "polygon(0 50%, 0 0, 100% 0, 100% 50%, 50% 100%)",
                        height: "60vh",
                        backgroundColor: "solutions.header",
                    }}
                >
                    <div className="solutions_header_content">
                        <Typography variant="h2" component="div" style={{ fontFamily: "Mohave", fontWeight: 400 }} gutterBottom>
                            Learn more
                    </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            made easy with MPloy.
                    </Typography>
                    </div>
                </Box>
            </div>

            <div className="homearea">
                <div className="solutions_mid_content_top">
                    <Typography variant="h3" gutterBottom>
                        Key Features
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            boxShadow: "none",
                            background: "background.default",
                            justifyContent: 'center',
                        }}
                    >
                        <div>
                            <Container sx={{
                                borderRadius: "5px",
                                background: "#34aadc",
                                m: 3,
                                width: 120,
                                height: 120,
                            }}>AA</Container>
                            <Box component="span" sx={{ m: 1, width: '120', height: "30", boxShadow: "none" }}> Employee Management</Box>
                        </div>
                        <div>
                            <Container sx={{
                                borderRadius: "5px",
                                background: "#FF9500",
                                m: 3,
                                width: 120,
                                height: 120,
                            }}>AA</Container>
                            <Box component="span" sx={{ m: 1, width: '120', height: "30", boxShadow: "none" }}> Calendar</Box>
                        </div>
                        <div>
                            <Container sx={{
                                borderRadius: "5px",
                                background: "#4cd96f",
                                m: 3,
                                width: 120,
                                height: 120,
                            }}>AA</Container>
                            <Box component="span" sx={{ m: 1, width: '120', height: "30", boxShadow: "none" }}> Task Management</Box>
                        </div>
                        <div>
                            <Container sx={{
                                borderRadius: "5px",
                                background: "#5856d6",
                                m: 3,
                                width: 120,
                                height: 120,
                            }}>AA</Container>
                            <Box component="span" sx={{ m: 1, width: '120', height: "30", boxShadow: "none" }}> E-Learning</Box>
                        </div>
                        <div>
                            <Container sx={{
                                borderRadius: "5px",
                                background: "#ff3b30",
                                m: 3,
                                width: 120,
                                height: 120,
                            }}>AA</Container>
                            <Box component="span" sx={{ m: 1, width: '120', height: "30", boxShadow: "none" }}> Payroll</Box>
                        </div>
                    </Box>
                </div>
                <div className="solutions_mid_content_mid">

                </div>
            </div>
            <LandingpageFooter />
        </Box>
    )
}


export default Solutions;
