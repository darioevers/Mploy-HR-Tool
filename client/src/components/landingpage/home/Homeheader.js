import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Homeheader = () => {
    return (
        <div className="homeheader_mainbox">
            <Container>
                <div className="homeheader_topbox">
                    <Typography variant="h1" component="div" style={{ fontFamily: "Mohave", fontWeight: 400 }} gutterBottom>
                        HUMAN RESSOURCE
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        made easy with MPloy.
                    </Typography>
                    <Link to="/login">
                        <Button variant="contained" size="large" style={{ marginTop: "2rem" }}>LOGIN</Button>
                    </Link>
                </div>
                <div className="homeheader_botbox">
                </div>
            </Container>

        </div>
    )
}

export default Homeheader;