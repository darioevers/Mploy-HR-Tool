import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import LandingpageFooter from '../LandingpageFooter';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Contact = () => {
    return (<Box
        sx={{
            bgcolor: 'background.default',
            borderRadius: '0px'
        }}
    >

        <LandingpageTopnav />
        <div className="homearea">
            {/* <Container> */}
            <div className="contact_mainbox">
                <div className="contact_textbox">
                    <Box component="span" sx={{ width: '100%', maxWidth: 500 }}>
                        <Typography variant="h3" component="div">
                            Get In Touch.
                                </Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "400" }}>
                            Lorem Ipsum
                                </Typography>
                        <Typography variant="body1" gutterBottom>
                            Lorem Ipsusmdf suiadh kajshd kashdksadh saka
                                    </Typography>
                        <Divider variant="middle" />
                    </Box>
                </div>
                <div className="contact_formbox">
                    <Box
                        id="boxtest"
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '25ch' },
                            textAlign: "center",
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField required id="contactform_name" label="First Name" variant="standard" />
                        <TextField required id="contactform_name" label="Last Name" variant="standard" />
                        <TextField required id="contactform_email" label="Email" variant="standard" />
                        <TextField id="contactform_phone" label="Phone" variant="standard" />
                        <TextField required
                            id="contactform_message"
                            label="Message"
                            multiline
                            maxRows={5}
                            rows={4}
                            fullWidth
                            style={{ width: "90%" }}
                        />
                        <Button variant="contained" id="contactform_namelabel" style={{ width: "90%" }}>Send Message</Button>
                    </Box>
                </div>
            </div>
            {/* </Container> */}
        </div>
        <LandingpageFooter />

    </Box>)
}

export default Contact;