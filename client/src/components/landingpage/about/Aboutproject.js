import * as React from "react";

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

// MUI IMPORTS
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

// COMPONENT EXPORT
const Aboutproject = () => {
  // TRANSLATION FUNCTION
  const { t } = useTranslation();
  return (
    <div className="homearea">
      <Box sx={{ textAlign: "center", alignItems: "center", marginTop: 10 }}>
        <Typography variant="h3">⚙️</Typography>
        <Typography variant="h2">{t("aboutProject.title01")}</Typography>
        <Box
          sx={{
            display: "table",
            margin: "0 auto",
            maxWidth: "550px",
            marginBottom: 5,
          }}
        >
          <Typography variant="body1">
            <Box sx={{ fontSize: 20 }}>{t("aboutProject.body01")}</Box>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ boxShadow: "0", marginBottom: 6 }}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              {t("aboutProject.timelineStep01")}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box className="about_timeline_container">
                <Typography variant="h4">
                  <Box sx={{ fontWeight: "light", marginBottom: 2 }}>
                    {t("aboutProject.timelineTitle01")}
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                    >
                      <Tooltip title="Slack">
                        <img
                          src={slacklogo}
                          alt="Slack Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="Trello">
                        <img
                          src={trellologo}
                          alt="Trello Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="GitHub">
                        <img
                          src={githublogo}
                          alt="GitHub Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="Zoom">
                        <img
                          src={zoomlogo}
                          alt="Zoom Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                    </Stack>
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: "justify" }}
                >
                  <Box sx={{ fontSize: 20, marginBottom: 8 }}>
                    {t("aboutProject.timelineDesc01")}
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                      sx={{ marginTop: 2 }}
                    >
                      <Button
                        variant="outlined"
                        href="https://github.com/darioevers/Mploy-HR-Tool"
                        target="_blank"
                      >
                        GITHUB REPO
                      </Button>
                    </Stack>
                  </Box>
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Box className="about_timeline_container">
                <Typography variant="h4">
                  <Box sx={{ fontWeight: "light", marginBottom: 2 }}>
                    {t("aboutProject.timelineTitle02")}
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={1}
                    >
                      <Tooltip title="Figma">
                        <img
                          src={figmalogo}
                          alt="Figma Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="Adobe">
                        <img
                          src={adobelogo}
                          alt="Adobe Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                    </Stack>
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: "justify" }}
                >
                  <Box sx={{ fontSize: 20, marginBottom: 8 }}>
                    {t("aboutProject.timelineDesc02")}
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={1}
                      sx={{ marginTop: 2 }}
                    >
                      <Button href="#" target="_blank">
                        BRANDING GUIDE
                      </Button>
                      <Button
                        variant="outlined"
                        target="_blank"
                        href="https://www.figma.com/proto/T4rmZ3cbIIEXX0q8tp4I6B/HR-MANAGEMENT-TOOL?node-id=63%3A481&scaling=min-zoom&page-id=63%3A163&starting-point-node-id=63%3A481&show-proto-sidebar=1"
                      >
                        FIGMA PROTOTYPE
                      </Button>
                    </Stack>
                  </Box>
                </Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {t("aboutProject.timelineStep02")}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              {t("aboutProject.timelineStep03")}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box className="about_timeline_container">
                <Typography variant="h4">
                  <Box sx={{ fontWeight: "light", marginBottom: 2 }}>
                    {t("aboutProject.timelineTitle03")}
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                    >
                      <Tooltip title="ReactJS">
                        <img
                          src={reactlogo}
                          alt="ReactJS Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="Material UI">
                        <img
                          src={muilogo}
                          alt="Material UI Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="i18next">
                        <img
                          src={i18nextlogo}
                          alt="i18n Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                    </Stack>
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: "justify" }}
                >
                  <Box sx={{ fontSize: 20, marginBottom: 8 }}>
                    {t("aboutProject.timelineDesc03")}
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                      sx={{ marginTop: 2 }}
                    >
                      <Button
                        variant="outlined"
                        href="https://github.com/darioevers/Mploy-HR-Tool/tree/main/client/src"
                        target="_blank"
                      >
                        GITHUB SRC
                      </Button>
                    </Stack>
                  </Box>
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Box className="about_timeline_container">
                <Typography variant="h4">
                  <Box sx={{ fontWeight: "light", marginBottom: 2 }}>
                    {t("aboutProject.timelineTitle04")}
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={1}
                    >
                      <Tooltip title="ReactJS">
                        <img
                          src={reactlogo}
                          alt="ReactJS Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="ExpressJS">
                        <img
                          src={expressjslogo}
                          alt="ExpressJS Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                      <Tooltip title="MongoDB">
                        <img
                          src={mongodblogo}
                          alt="MongoDB Logo"
                          className="about_project_logos"
                        />
                      </Tooltip>
                    </Stack>
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: "justify" }}
                >
                  <Box sx={{ fontSize: 20 }}>
                    {t("aboutProject.timelineDesc04")}
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={1}
                      sx={{ marginTop: 2 }}
                    >
                      <Button
                        variant="outlined"
                        href="https://github.com/darioevers/Mploy-HR-Tool/tree/main/server"
                        target="_blank"
                      >
                        GITHUB SERVER
                      </Button>
                    </Stack>
                  </Box>
                </Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {t("aboutProject.timelineStep04")}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </div>
  );
};

export default Aboutproject;
