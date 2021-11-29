import React from "react";
import { Link } from "react-router-dom";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// NAVBAR + FOOTER IMPORT
import LandingpageTopnav from "../navigation/LandingpageTopnav";
import LandingpageFooter from "../navigation/LandingpageFooter";

// IMAGE IMPORTS
import SolutionsBottomBanner from "../../../img/images/presentation.jpg";

// ICON IMPORTS
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

// MUI IMPORTS
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// GRID ITEM
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// COMPONENT EXPORT
export default function Solutions(props) {
  // EDIT STRINGS HERE
  const content = {
    // HEADER CONTENT
    topheading: "HR has never been easier.",
    "01_subheading": "Setup in minutes",
    "02_subheading": "Manage everything in one workspace",
    "03_subheading": "Its so cheap",
    "01_body":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "02_body":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "03_body":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pricing_button: "PRICING",
    "1_button": "INFO",
    // MID CONTENT
    ...props.content,
  };
  const { t } = useTranslation();
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
        <Box
          sx={{
            textAlign: "center",
            alignItems: "center",
            marginTop: 15,
            boxShadow: "0",
          }}
        >
          <Typography variant="h3">🙌</Typography>
          <Typography variant="h2">{t("solutions.title01")}</Typography>
          <Box
            sx={{
              display: "table",
              margin: "0 auto",
              maxWidth: "550px",
              boxShadow: "0",
            }}
          ></Box>
        </Box>
        <div className="solutions_mainbox">
          <section id="landingpage_solutions_header">
            <div className="landingpage_solutions_header">
              <Box
                sx={{
                  width: "90%",
                  margin: "0 auto",
                  paddingTop: 3,
                  paddingBottom: "6em",
                  boxShadow: "0",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Item
                      sx={{
                        borderRadius: "8",
                        boxShadow: "none",
                        bgcolor: "background.lighterThree",
                        textAlign: "justify",
                      }}
                    >
                      <AccessAlarmIcon
                        fontSize="large"
                        sx={{ color: "#eb3357", marginBottom: "1rem" }}
                      />
                      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                        {t("solutions.gridTitle01")}
                      </Typography>
                      <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
                        <Box
                          sx={{
                            fontSize: "18px",
                            boxShadow: "0",
                            marginTop: 2,
                          }}
                        >
                          {t("solutions.gridDesc01")}
                        </Box>
                      </Typography>
                      <Link to={"/solutions"}>
                        <Button>{t("solutions.gridButton01")}</Button>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Item
                      sx={{
                        borderRadius: "8",
                        boxShadow: "none",
                        bgcolor: "background.lighterThree",
                        textAlign: "justify",
                      }}
                    >
                      <DashboardIcon
                        fontSize="large"
                        sx={{ color: "#4b9ef8", marginBottom: "1rem" }}
                      />
                      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                        {t("solutions.gridTitle02")}
                      </Typography>
                      <Typography sx={{ marginBottom: "2rem" }}>
                        <Box
                          sx={{
                            fontSize: "18px",
                            boxShadow: "0",
                            marginTop: 2,
                          }}
                        >
                          {t("solutions.gridDesc02")}
                        </Box>
                      </Typography>
                      <Link to={"/solutions"}>
                        <Button>{t("solutions.gridButton02")}</Button>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Item
                      sx={{
                        borderRadius: "8",
                        boxShadow: "none",
                        bgcolor: "background.lighterThree",
                        textAlign: "justify",
                      }}
                    >
                      <MoneyOffIcon
                        fontSize="large"
                        sx={{ color: "#f5ba41", marginBottom: "1rem" }}
                      />
                      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                        {t("solutions.gridTitle03")}
                      </Typography>
                      <Typography sx={{ marginBottom: "2rem" }}>
                        <Box
                          sx={{
                            fontSize: "18px",
                            boxShadow: "0",
                            marginTop: 2,
                          }}
                        >
                          {t("solutions.gridDesc03")}
                        </Box>
                      </Typography>
                      <Link to={"/solutions"}>
                        <Button>{t("solutions.gridButton03")}</Button>
                      </Link>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </section>
          <section id="landingpage_solutions_servicelist">
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "#ebebeb",
                  }}
                >
                  <br></br>
                  <Typography className="homeservices_grid_text">
                    IMAGE MOBILE APP
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "background.default",
                  }}
                >
                  <Typography className="homeservices_grid_text">
                    CONTENT{" "}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "background.default",
                  }}
                >
                  <br></br>
                  <Typography className="homeservices_grid_text">
                    CONTENT
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "#ebebeb",
                  }}
                >
                  <br></br>
                  <Typography className="homeservices_grid_text">
                    IMAGE WEB VERSION
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "#ebebeb",
                  }}
                >
                  <br></br>
                  <Typography className="homeservices_grid_text">
                    IMAGE SOMETHING
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "background.default",
                  }}
                >
                  <br></br>
                  <Typography className="homeservices_grid_text">
                    CONTENT
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </section>
        </div>
      </div>
      <div>
        <section className="landingpage_solutions_cta">
          <Box
            sx={{
              width: "100vw",
              boxShadow: "0",
              marginTop: 5,
            }}
          >
            <img
              src={SolutionsBottomBanner}
              alt="Office Presentation"
              style={{ width: "100vw" }}
            />
          </Box>
        </section>
      </div>
      <LandingpageFooter />
    </Box>
  );
}
