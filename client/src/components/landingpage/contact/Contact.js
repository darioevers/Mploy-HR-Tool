import React from 'react';
import LandingpageTopnav from '../LandingpageTopnav';
import LandingpageFooter from '../LandingpageFooter';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Contact = () => {
    return (<Box
        sx={{
            bgcolor: 'background.darker',
            borderRadius: '0px'
        }}
    >
        <div>
            <LandingpageTopnav />
            <div className="homearea">
                {/* <Container> */}
                <div className="contact_mainbox">
                    <div className="contact_textbox">
                        <Box component="span" sx={{ width: '100%', maxWidth: 500 }}>
                            <Typography variant="h3" gutterBottom component="div">
                                h3. Heading
                                </Typography>
                        </Box>
                    </div>
                    <div className="contact_formbox">
                        <Box
                            id="boxtest"
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="standard-basic" label="First Name" variant="standard" />
                            <TextField id="standard-basic" label="Last Name" variant="standard" />
                            <TextField id="standard-basic" label="Phone" variant="standard" />
                            <TextField required id="standard-basic" label="E-Mail" variant="standard" />
                            <TextField required
                                id="outlined-multiline-flexible"
                                label="Message"
                                multiline
                                maxRows={4}
                                fullWidth
                            />
                        </Box>
                    </div>
                </div>
                {/* </Container> */}
            </div>
            <LandingpageFooter />
        </div >
    </Box>)
}

export default Contact;