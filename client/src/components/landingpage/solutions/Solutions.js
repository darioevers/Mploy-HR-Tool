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
                bgcolor: 'background.darker',
                borderRadius: '0px'
            }}
        >
            <LandingpageTopnav />
            <div className="solutions_header" style={{ background: "background.darker" }}>
                <div className="solutions_header_content">
                    <Typography variant="h2" component="div" style={{ fontFamily: "Mohave", fontWeight: 400 }} gutterBottom>
                        Learn more
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        made easy with MPloy.
                    </Typography>
                </div>
            </div>
            <div className="homearea">
                <div className="solutions_mid">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            boxShadow: "none",
                            justifyContent: 'center',
                            '& > :not(style)': {
                                m: 3,
                                width: 120,
                                height: 120,
                            },
                        }}
                    >
                        <Container sx={{ borderRadius: "5px", background: "#34aadc" }}></Container>
                        <Container sx={{ borderRadius: "5px", background: "#4cd96f" }}></Container>
                        <Container sx={{ borderRadius: "5px", background: "#ffcc00" }}></Container>
                        <Container sx={{ borderRadius: "5px", background: "#5856d6" }}></Container>
                        <Container sx={{ borderRadius: "5px", background: "#ff3b30" }}></Container>
                        <Container sx={{ borderRadius: "5px", background: "#FF9500" }}></Container>
                        <Box component="span" sx={{ m: 3, width: '120', height: "30", boxShadow: "none" }}> Employee Management</Box>
                        <Box component="span" sx={{ m: 3, width: '120', height: "30", boxShadow: "none" }}> Employee Management</Box>
                        <Box component="span" sx={{ m: 3, width: '120', height: "30", boxShadow: "none" }}> Employee Management</Box>
                        <Box component="span" sx={{ m: 3, width: '120', height: "30", boxShadow: "none" }}> Employee Management</Box>
                        <Box component="span" sx={{ m: 3, width: '120', height: "30", boxShadow: "none" }}> Employee Management</Box>
                        <Box component="span" sx={{ m: 3, width: '120', height: "30", boxShadow: "none" }}> Employee Management</Box>
                    </Box>
                </div>
            </div>
            <LandingpageFooter />
        </Box>
    )
}


export default Solutions;
