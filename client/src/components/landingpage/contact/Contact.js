import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// NAVBAR + FOOTER IMPORT
import LandingpageTopnav from "../navigation/LandingpageTopnav";
import LandingpageFooter from "../navigation/LandingpageFooter";


// MUI IMPORTS
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// COMPONENT EXPORT
export default function Contact(props) {
  // EDIT STRINGS HERE
  const content = {
    "01_mainheading": "Get In Touch.",
    "01_subheading": "Subheading",
    "01_body": "Lorem Ipsum Paragraph 01_body",
    "02_button": "LEARN MORE",
    "1_button": "INFO",
    ...props.content,
  };

  // TRANSLATION FUNCTION
  const { t } = useTranslation();

  // ICON MENU FUNCTION
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        borderRadius: "0px",
        boxShadow: "0",
      }}
    >
      <LandingpageTopnav />
      <div className="homearea">
        <div className="contact_mainbox">
          <Box sx={{ width: "100%", boxShadow: "0", marginTop: 8, display: "flex", flexWrap: "wrap" }}>
            <Box
              sx={{ boxShadow: "0", mr: 5 }}
            >
              <Typography variant="h2" className="aboutintro_heading">
                Get In Touch.
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ maxWidth: "400px", textAlign: "justify" }}
              >
                <Box sx={{ fontSize: 22, boxShadow: "0" }}>
                  MPloy is the first project we've independently developed and
                  managed, so we would love to hear your feedback. Please fill out
                  the contact form below to get in touch.
                </Box>
              </Typography>
            </Box>
            <div className="contact_formbox">
              <Box
                id="boxtest"
                component="form"
                sx={{
                  "& > :not(style)": { m: 2, width: "25ch" },
                  textAlign: "center",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="contactform_name"
                  label="First Name"
                  variant="standard"
                />
                <TextField
                  required
                  id="contactform_name"
                  label="Last Name"
                  variant="standard"
                />
                <TextField
                  required
                  id="contactform_email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  id="contactform_phone"
                  label="Phone"
                  variant="standard"
                />
                <TextField
                  required
                  id="contactform_message"
                  label="Message"
                  multiline
                  maxRows={10}
                  minRows={6}
                  fullWidth
                  style={{ width: "90%" }}
                />
                <Button
                  variant="contained"
                  id="contactform_namelabel"
                  style={{ width: "90%" }}
                >
                  Send Message
              </Button>
              </Box>
            </div>
          </Box>
        </div>
      </div>
      <LandingpageFooter />
    </Box>
  );
}
