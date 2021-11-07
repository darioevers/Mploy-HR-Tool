import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Homeheader = () => {
    return (
        <div className="homeheader_mainbox">
            <Container>
                <div className="homeheader_topbox">
                    <Typography variant="h1" component="div" style={{ fontFamily: "Mohave", fontWeight: 400, color: "#293241" }} gutterBottom>
                        HUMAN RESSOURCE
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        made easy with MPloy.
                    </Typography>
                </div>
            </Container>

        </div>
    )
}

export default Homeheader;