import React from 'react';

// IMAGE IMPORTS
import HomeHeaderGraphic from "../../../img/graphics/browser-mockup.png";

// MUI IMPORTS
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// COMPONENT EXPORT
export default function Homeheader(props) {
    // EDIT STRINGS HERE
    const content = {
        'topheading': 'INTRODUCING',
        '01_mainheading': 'MPLOY',
        '02_mainheading': 'HR TOOL',
        '01_button': 'LOGIN',
        '02_button': 'LEARN MORE',
        ...props.content
    };
    // BUTTON COLORING
    const theme = createTheme({
        palette: {
            button: {
                main: '#fff',
                contrastText: '#fff',
            },
        },
    });
    return (
        <div className="homearea">
            <div className="homeheader_mainbox">
                <Box sx={{
                    display: 'flex',
                    bgcolor: "rgb(238,108,77)",
                    background: "linear-gradient(149deg, rgba(238,108,77,1) 0%, rgba(152,193,217,1) 100%)",
                    color: 'text.primary',
                    backdropFilter: "blur(400px)",
                    borderRadius: 2,
                    width: "100%",
                    height: "60vh",
                    marginTop: 15,
                    marginBottom: 5,
                    boxShadow: "0",
                }}>
                    <div className="homeheader_mainbox_content">
                        <div className="homeheader_mainbox_leftcontent">
                            <Typography>{content['topheading']}</Typography>
                            <Typography variant="h2" style={{ fontWeight: 700, color: "#fff", }}>{content['01_mainheading']}</Typography>
                            <Typography variant="h2" style={{ fontWeight: 700, color: "#000" }}>{content['02_mainheading']}</Typography>
                            <Stack spacing={2} direction="row" sx={{ marginTop: "2rem" }}>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="button">{content['01_button']}</Button>
                                    <Button variant="outlined" color="button">{content['02_button']}</Button>
                                </ThemeProvider>
                            </Stack>
                        </div>
                        <div className="homeheader_mainbox_rightcontent">
                            <img src={HomeHeaderGraphic} alt="Mploy WebApp Screenshot"></img>
                        </div>
                    </div>
                </Box>
            </div >
        </div >
    )
}