import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// LOGO IMPORTS
import slacklogo from "../../../img/logo/slack.png";
import figmalogo from "../../../img/logo/figma.png";
import trellologo from "../../../img/logo/trello.png";
import githublogo from "../../../img/logo/github.png";
import zoomlogo from "../../../img/logo/zoom.png";
import adobelogo from "../../../img/logo/adobe.png";
import reactlogo from "../../../img/logo/react.png";
import muilogo from "../../../img/logo/mui.png";
import expressjslogo from "../../../img/logo/expressjs.png";
import i18nextlogo from "../../../img/logo/i18next.png";
import mongodblogo from "../../../img/logo/mongodb.png";
import sendgridlogo from "../../../img/logo/sendgridlogo.png";

//  MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// COMPONENT EXPORT
const Abouttools = () => {
  // TRANSLATION FUNCTION
  const { t } = useTranslation();
  return (
    <div className="homearea">
      <Box
        className="abouttools_container"
        sx={{
          marginTop: 10,
        }}
      >
        <Typography variant="h4">
          <Box sx={{ fontWeight: "400", m: 1 }}>{t("aboutTools.title01")}</Box>
        </Typography>
        <Grid container spacing={2} sx={{ boxShadow: "0" }}>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={slacklogo}
                alt="Slack Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>Slack</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={figmalogo}
                alt="Figma Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>Figma</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0", display: "block" }}>
              <img
                src={trellologo}
                alt="Trello Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>Trello</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={githublogo}
                alt="GitHub Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>GitHub</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img src={zoomlogo} alt="Zoom Logo" className="abouttools_img" />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>Zoom</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={adobelogo}
                alt="Adobe Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>Adobe</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={reactlogo}
                alt="ReactJS Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>React</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img src={muilogo} alt="MUI Logo" className="abouttools_img" />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>MUI</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={expressjslogo}
                alt="Express Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>Express</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={i18nextlogo}
                alt="i18n Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>i18next</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={mongodblogo}
                alt="MongoDB Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>MongoDB</Box>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
            <Item sx={{ boxShadow: "0" }}>
              <img
                src={sendgridlogo}
                alt="SendGrid Logo"
                className="abouttools_img"
              />
              <Typography>
                <Box sx={{ fontWeight: 500, m: 2 }}>SendGrid</Box>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Abouttools;
