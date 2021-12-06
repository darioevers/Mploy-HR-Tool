import React from "react";
import { Link } from "react-router-dom";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// NAVBAR + FOOTER IMPORT
import LandingpageTopnav from "../navigation/LandingpageTopnav";
import LandingpageFooter from "../navigation/LandingpageFooter";

// IMAGE IMPORTS
import SolutionsBottomBanner from "../../../img/images/presentation.jpg";
import ImgTabletAdminDrawer from "../../../img/graphics/tablet_admindrawer.png";
import ImgLaptopLeaveForm from "../../../img/graphics/laptop_leaveform.png";
import ImgLaptopEdit from "../../../img/graphics/laptop_edit.png";

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
const Solutions = () => {
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
                  maxWidth: "950px",
                  margin: "0 auto",
                  paddingTop: 3,
                  paddingBottom: "6em",
                  boxShadow: "0",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Item
                      className="solutions_gridcontainer"
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
            <Grid container>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "background.lighterThree",
                  }}
                >
                  <Box sx={{
                    bgcolor: "transparent",
                    mb: 1,
                    boxShadow: "0",
                    overflow: "hidden",
                    justify: "center",
                    alignItems: "center"
                  }}>
                    <img src={ImgTabletAdminDrawer} style={{ width: "70%" }} />
                  </Box>
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
                  <Box sx={{
                    display: "flex",
                    height: "500px",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0",
                  }}>
                    <Box sx={{
                      boxShadow: "0",
                    }}>
                      <Typography variant="h4">
                        Company-wide announcements
                        <br /> from your pocket.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Use MPloy to send and receive company-wide announcements.
                  </Typography>
                    </Box>
                  </Box>
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
                  <Box sx={{
                    display: "flex",
                    height: "500px",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0",
                  }}>
                    <Box sx={{
                      boxShadow: "0",
                    }}>
                      <Typography variant="h4">
                        Streamlined
                        <br /> leave process.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Use MPloy to send and receive company-wide announcements.
                  </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "background.lighterThree",
                  }}
                >
                  <br></br>
                  <Typography className="homeservices_grid_text">
                    <img src={ImgLaptopLeaveForm} style={{ width: "95%" }} />
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Item
                  sx={{
                    height: "500px",
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "background.lighterThree",
                  }}
                >
                  <br></br>
                  <Typography className="homeservices_grid_text">
                    <img src={ImgLaptopEdit} style={{ width: "95%" }} />
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
                  <Box sx={{
                    display: "flex",
                    height: "500px",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0",
                  }}>
                    <Box sx={{
                      boxShadow: "0",
                    }}>
                      <Typography variant="h4">
                        Company-wide announcements
                        <br /> from your pocket.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Use MPloy to send and receive company-wide announcements.
                  </Typography>
                    </Box>
                  </Box>
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
    </Box >
  );
};

export default Solutions;
