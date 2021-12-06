import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// IMAGE IMPORTS
import blankprofilepic from "../../../img/graphics/blankprofilepic.png";

// ICON IMPORTS
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

// IMAGE IMPORTS
import ProfilePictureAlex from "../../../img/images/alexalbaran.jpeg";
import ProfilePictureDario from "../../../img/images/darioevers.jpg";
import ProfilePictureMaryam from "../../../img/images/maryampayenda.jpeg";

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
                  src={ProfilePictureAlex}
                  alt="Teammember"
                  className="about_profilepics"
                />
              </Box>
              <Typography variant="h5">Alex Albaran</Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole01")}
              </Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole02")}
              </Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole03")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {/* {t("aboutTeam.teamDesc01")} */}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Box>
                  <a href="https://github.com/albaranlex" target="_blank">
                    <GitHubIcon />
                  </a>
                </Box>
                <Box>
                  <a href="https://www.linkedin.com/in/albaranalex/" target="_blank">
                    <LinkedInIcon />
                  </a>
                </Box>
                <Box>
                  <a href="mailto:albaranlex@icloud.com" target="_blank">
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
                  src={ProfilePictureDario}
                  alt="Teammember"
                  className="about_profilepics"
                />
              </Box>
              <Typography variant="h5">Dario Evers</Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole01")}
              </Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole03")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t("aboutTeam.teamRole04")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {/* {t("aboutTeam.teamDesc02")} */}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <a href="https://github.com/darioevers" target="_blank">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/dario-n-evers/" target="_blank">
                  <LinkedInIcon />
                </a>
                <a href="mailto:darioevers@gmail.com" target="_blank">
                  <AlternateEmailIcon />
                </a>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Item sx={{ boxShadow: "0" }}>
              <Box>
                <img
                  src={ProfilePictureMaryam}
                  alt="Teammember"
                  className="about_profilepics"
                />
              </Box>
              <Typography variant="h5">Maryam Payenda</Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole01")}
              </Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole02")}
              </Typography>
              <Typography variant="body1">
                {t("aboutTeam.teamRole05")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {/* {t("aboutTeam.teamDesc03")} */}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <a href="https://github.com/MaryamPayenda" target="_blank">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/maryam-payenda-1844a7140/" target="_blank">
                  <LinkedInIcon />
                </a>
                <a href="mailto:maryampayanda12@gmail.com" target="_blank">
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
