import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// IMAGE IMPORTS
import blankprofilepic from "../../../img/graphics/blankprofilepic.png";

// ICON IMPORTS
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

//  MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// COMPONENT EXPORT
const Aboutteam = () => {
  // TRANSLATION FUNCTION
  const { t } = useTranslation();
  return (
    <div className="homearea">
      <Box sx={{ textAlign: "center", alignItems: "center", marginTop: 10 }}>
        <Typography variant="h3">👋</Typography>
        <Typography variant="h2">{t("aboutTeam.title01")}</Typography>
        <Box
          sx={{
            display: "table",
            margin: "0 auto",
            maxWidth: "550px",
            marginBottom: 5,
          }}
        >
          <Typography variant="body1">
            <Box sx={{ fontSize: 20 }}>{t("aboutTeam.body01")}</Box>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: 8 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Item sx={{ boxShadow: "0" }}>
              <Box>
                <img
                  src={blankprofilepic}
                  alt="Teammember"
                  className="about_profilepics"
                />
              </Box>
              <Typography variant="h5">Alex Albaran</Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole01")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t("aboutTeam.teamDesc01")}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Box>
                  <a href="github.com">
                    <GitHubIcon />
                  </a>
                </Box>
                <Box>
                  <a href="github.com">
                    <LinkedInIcon />
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <AlternateEmailIcon />
                  </a>
                </Box>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Item sx={{ boxShadow: "0" }}>
              <Box>
                <img
                  src={blankprofilepic}
                  alt="Teammember"
                  className="about_profilepics"
                />
              </Box>
              <Typography variant="h5">Dario Evers</Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole02")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t("aboutTeam.teamDesc02")}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <a href="github.com">
                  <GitHubIcon />
                </a>
                <a href="github.com">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <AlternateEmailIcon />
                </a>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Item sx={{ boxShadow: "0" }}>
              <Box>
                <img
                  src={blankprofilepic}
                  alt="Teammember"
                  className="about_profilepics"
                />
              </Box>
              <Typography variant="h5">Maryam Payenda</Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole03")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t("aboutTeam.teamDesc03")}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <a href="github.com">
                  <GitHubIcon />
                </a>
                <a href="github.com">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <AlternateEmailIcon />
                </a>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Aboutteam;
