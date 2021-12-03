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
        <Box sx={{ marginTop: 19, boxShadow: "0" }}>
          <Typography variant="h1" className="aboutintro_heading">
            Get In Touch.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ maxWidth: "600px", textAlign: "justify" }}
          >
            <Box sx={{ fontSize: 22, boxShadow: "0" }}>
              MPloy is the first project we've independently developed and
              managed, so we would love to hear your feedback. Please fill out
              the contact form below to get in touch.
            </Box>
          </Typography>
        </Box>
        <div className="contact_mainbox">
          <div className="contact_textbox">
            <Box
              component="span"
              sx={{ width: "100%", maxWidth: 500, marginTop: "6rem" }}
            >
              <Typography variant="h3" component="div">
                You can reach us here:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> GitHub
                </MenuItem>
                <MenuItem>
                  <Avatar /> LinkedIn
                </MenuItem>
              </Menu>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "400" }}>
                E-Mail:
              </Typography>
              <Typography variant="body1" gutterBottom>
                nameL email
              </Typography>
              <Divider variant="middle" />
            </Box>
          </div>
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
        </div>
      </div>
      <LandingpageFooter />
    </Box>
  );
}
