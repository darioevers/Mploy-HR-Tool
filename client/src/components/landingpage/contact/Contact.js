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
                {t("contact.title")}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ maxWidth: "400px", textAlign: "justify" }}
              >
                <Box sx={{ fontSize: 22, boxShadow: "0" }}>
                  {t("contact.body")}
                </Box>
              </Typography>
            </Box>
            <div className="contact_formbox">
              <Box
                id="boxtest"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                  textAlign: "center",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="contactform_name"
                  label={t("landingRegister.formdesc01")}
                  variant="outlined"
                />
                <TextField
                  required
                  id="contactform_name"
                  label={t("landingRegister.formdesc02")}
                  variant="outlined"
                />
                <TextField
                  required
                  id="contactform_email"
                  label={t("landingRegister.formdesc03")}
                  variant="outlined"
                />
                <TextField
                  id="contactform_phone"
                  label={t("dashboardEditEmployeeData.phone")}
                  variant="outlined"
                />
                <TextField
                  required
                  id="contactform_message"
                  label={t("dashboardRightDrawer.formDesc08")}
                  multiline
                  maxRows={10}
                  minRows={6}
                  fullWidth
                  style={{ width: "90%" }}
                />
                <Tooltip
                  title="Please contact us via email"
                >
                  <span>
                    <Button
                      variant="contained"
                      id="contactform_namelabel"
                      style={{ width: "90%" }}
                      disabled
                    >
                      {t("dashboardRightDrawer.formButton01")}
                    </Button>
                  </span>
                </Tooltip>
              </Box>
            </div>
          </Box>
        </div>
      </div>
      <LandingpageFooter />
    </Box>
  );
}
