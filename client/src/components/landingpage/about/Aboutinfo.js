import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// LOGO IMPORTS
import dcilogo from "../../../img/logo/DCI_Logo.png";

// ICON IMPORTS
import GitHubIcon from "@mui/icons-material/GitHub";
import MessageIcon from "@mui/icons-material/Message";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ApiIcon from "@mui/icons-material/Api";

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
export default function Aboutoutro(props) {
  const content = {
    // GRID NUMBER STRINGS
    commits: "426",
    lines: "15354",
    messages: "2400",
    hours: "300",
    tech: "12+",
    // MID CONTENT
    ...props.content,
  };
  // TRANSLATION FUNCTION
  const { t } = useTranslation();
  return (
    <Box sx={{ bgcolor: "background.lighterThree", boxShadow: "0", m: 5 }}>
      <div className="homearea">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 1,
          }}
        >
          <Box className="aboutintro_container">
            <Typography variant="h4">
              <Box sx={{ fontWeight: "light", m: 2, p: 2 }}>
                {t("aboutInfo.title01")}
              </Box>
              <Box sx={{ m: 2, p: 2 }}>
                <a
                  href="https://digitalcareerinstitute.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={dcilogo}
                    alt="Digital Career Institute Logo"
                    className="dcilogo"
                  ></img>
                </a>
              </Box>
            </Typography>
          </Box>
          <Box className="aboutintro_container">
            <Typography variant="h4">
              <Box sx={{ fontWeight: "light", m: 2, p: 2 }}>
                {t("aboutInfo.title02")}
              </Box>
            </Typography>
            <Grid container spacing={2} sx={{ boxShadow: "0" }}>
              <Grid item xs={6} md={4} lg={4} xl={4}>
                <Item
                  sx={{ boxShadow: "0", bgcolor: "background.lighterThree" }}
                >
                  <GitHubIcon fontSize="large" />
                  <Typography variant="h6">{content["commits"]}</Typography>
                  <Typography variant="body1">
                    {t("aboutInfo.grid01")}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6} md={4} lg={4} xl={4}>
                <Item
                  sx={{ boxShadow: "0", bgcolor: "background.lighterThree" }}
                >
                  <CodeIcon fontSize="large" />
                  <Typography variant="h6">{content["lines"]}</Typography>
                  <Typography variant="body1">
                    {t("aboutInfo.grid02")}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6} md={4} lg={4} xl={4}>
                <Item
                  sx={{ boxShadow: "0", bgcolor: "background.lighterThree" }}
                >
                  <MessageIcon fontSize="large" />
                  <Typography variant="h6">{content["messages"]}</Typography>
                  <Typography variant="body1">
                    {t("aboutInfo.grid03")}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6} md={4} lg={4} xl={4}>
                <Item
                  sx={{ boxShadow: "0", bgcolor: "background.lighterThree" }}
                >
                  <AccessTimeIcon fontSize="large" />
                  <Typography variant="h6">{content["hours"]}</Typography>
                  <Typography variant="body1">
                    {t("aboutInfo.grid04")}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6} md={4} lg={4} xl={4}>
                <Item
                  sx={{
                    boxShadow: "0",
                    bgcolor: "background.lighterThree",
                  }}
                >
                  <ApiIcon fontSize="large" />
                  <Typography variant="h6">{content["tech"]}</Typography>
                  <Typography variant="body1">
                    {t("aboutInfo.grid05")}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6} md={4} lg={4} xl={4}>
                <Item
                  sx={{ boxShadow: "0", bgcolor: "background.lighterThree" }}
                >
                  <AllInclusiveIcon fontSize="large" />
                  <Typography variant="h6">{t("aboutInfo.grid06")}</Typography>
                  <Typography variant="body1">
                    {t("aboutInfo.grid07")}
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </Box>
  );
}
