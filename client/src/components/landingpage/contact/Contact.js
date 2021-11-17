import React from 'react';

// NAVBAR + FOOTER IMPORT
import LandingpageTopnav from '../LandingpageTopnav';
import LandingpageFooter from '../LandingpageFooter';

// ICON IMPORTS
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

// MUI IMPORTS
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// COMPONENT EXPORT
export default function Solutions(props) {
    // EDIT STRINGS HERE
    const content = {
        '01_mainheading': 'Get In Touch.',
        '01_subheading': 'Subheading',
        '01_body': 'Lorem Ipsum Paragraph 01_body',
        '02_button': 'LEARN MORE',
        '1_button': 'INFO',
        ...props.content
    };
    // SIDE TABS FUNCTION
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (<Box
        sx={{
            bgcolor: 'background.default',
            borderRadius: '0px',
            boxShadow: "0",
        }}
    >

        <LandingpageTopnav />
        <div className="homearea">
            <div className="contact_mainbox">
                <div className="contact_textbox">
                    <Box component="span" sx={{ width: '100%', maxWidth: 500, marginTop: "6rem" }}>
                        <Typography variant="h3" component="div">
                            {content['01_mainheading']}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "400" }}>
                            {content['01_subheading']}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {content['01_body']}
                        </Typography>
                        <Divider variant="middle" />
                    </Box>
                    <Tabs value={value} onChange={handleChange} id="contact_tabs">
                        <Tab icon={<PhoneIcon />} id="contact_tabs_icon" textColor="primary"
                            indicatorColor="peimary" >
                            Test </Tab>
                        <Tab icon={<FavoriteIcon />} id="contact_tabs_icon" />
                        <Tab icon={<PersonPinIcon />} id="contact_tabs_icon" />
                    </Tabs>
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
                            maxRows={10}
                            minRows={6}
                            fullWidth
                            style={{ width: "90%" }}
                        />
                        <Button variant="contained" id="contactform_namelabel" style={{ width: "90%" }}>Send Message</Button>
                    </Box>
                </div>
            </div>
        </div>
        <LandingpageFooter />

    </Box>)
}