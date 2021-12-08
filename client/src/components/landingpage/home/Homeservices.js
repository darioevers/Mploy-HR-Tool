import React from "react";
import { Link } from "react-router-dom";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// IMAGE IMPORTS
import HomeServicesGraphic from "../../../img/graphics/06_Digital_World.svg";
import ImgLaptopEmployees from "../../../img/graphics/laptop_employees.png";
import ImgMobileView from "../../../img/graphics/tablet_view.png";
import ImgLaptopEdit from "../../../img/graphics/laptop_edit.png";

// ICON IMPORTS
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

// MUI IMPORTS
import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// GRID ITEM
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// COMPONENT EXPORT
export default function Homeservices(props) {
  // languageSwitch FUNCTION
  const { t } = useTranslation();
  return (
    <div>
      <div className="homearea">
        <div className="homeservices_mainbox">
          <div className="homeservices_main_topbox"></div>
          <div className="homeservices_main_midbox">
            <div className="homeservices_main_midcontent">
              <Typography variant="h2" style={{ fontWeight: 700 }}>
                <span className="coloured_heading">
                  {t("landingHomeServices.title01")}
                </span>
                <br></br>
                {t("landingHomeServices.title02")}
              </Typography>
              <Typography
                variant="h5"
                style={{ marginTop: "1rem", textAlign: "justify" }}
              >
                {t("landingHomeServices.body01")}
              </Typography>
              <Typography variant="h5" style={{ marginTop: "1rem" }}>
                <Stack direction="row" spacing={3}>
                  <Link to={"/login"}>
                    <Button>{t("landingHomeServices.button01")}</Button>
                  </Link>
                  <Link to={"/contact"}>
                    <Button>{t("landingHomeServices.button02")}</Button>
                  </Link>
                </Stack>
              </Typography>
            </div>
            <div className="homeservices_main_midimage">
              <img src={HomeServicesGraphic} alt="Circle Graphic"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="homeservices_gridbox">
        <Box
          sx={{
            flexGrow: 1,
            boxShadow: "0",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Item
                sx={{
                  height: "400px",
                  borderRadius: "0",
                  boxShadow: "none",
                  bgcolor: "background.lighterThree",
                  overflow: "hidden"
                }}
              >
                <Box sx={{
                  display: "flex",
                  height: "300px",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0",
                  bgcolor: "transparent",
                }}>
                  <img src={ImgLaptopEmployees} style={{ width: "95%", maxWidth: "450px" }} />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Item
                sx={{
                  height: "400px",
                  borderRadius: "0",
                  boxShadow: "none",
                  bgcolor: "background.default",
                }}
              >
                <Box sx={{
                  display: "flex",
                  height: "300px",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0",
                  bgcolor: "transparent"
                }}>
                  <Box sx={{
                    boxShadow: "0",
                  }}>
                    <Typography variant="h4">
                      {t("landingHomeServices.gridItem01")}
                      <br />
                      {t("landingHomeServices.gridItem011")}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {t("landingHomeServices.gridDesc01")} </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Item
                sx={{
                  height: "400px",
                  borderRadius: "0",
                  boxShadow: "none",
                  bgcolor: "background.lighterThree",
                  overflow: "hidden"
                }}
              >
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0",
                  bgcolor: "transparent",
                }}>
                  <Box sx={{
                    boxShadow: "0",
                    mb: 2,
                    maxWidth: "400px"
                  }}>
                    <Typography variant="h4">
                      {t("landingHomeServices.gridItem02")}

                    </Typography>
                    <Typography variant="h4">
                      {t("landingHomeServices.gridItem022")}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {t("landingHomeServices.gridDesc02")}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
                  boxShadow: "0",
                  bgcolor: "transparent",
                }}>
                  <img src={ImgLaptopEdit} style={{ width: "55%" }} />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Item
                sx={{
                  height: "400px",
                  borderRadius: "0",
                  boxShadow: "none",
                  bgcolor: "background.lighterThree",
                  overflow: "hidden"
                }}
              >
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0",
                  bgcolor: "transparent",
                }}>
                  <Box sx={{
                    boxShadow: "0",
                    mb: 2,
                    maxWidth: "400px"
                  }}>
                    <Typography variant="h4">
                      {t("landingHomeServices.gridItem03")}
                    </Typography>
                    <Typography variant="h4">
                      {t("landingHomeServices.gridItem033")}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {t("landingHomeServices.gridDesc03")} </Typography>
                  </Box>
                </Box>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
                  boxShadow: "0",
                  bgcolor: "transparent",
                }}>
                  <img src={ImgMobileView} style={{ width: "40%" }} />
                </Box>
              </Item>
            </Grid>
            {/* <Grid item xs={12} md={12} lg={12} xl={12}>
              <Item
                sx={{
                  display: "flex",
                  borderRadius: "0",
                  boxShadow: "none",
                  bgcolor: "background.lighterThree",
                  alignItems: "center"
                }}
              >
                <Box sx={{ width: "85%", maxWidth: "650px", margin: "0 auto" }}>
                  <Typography variant="h4">
                    Digitising HR doesn’t need to be hard.
                </Typography>
                  <Typography variant="body1">
                    HR Management should be seamless, intuitive and easy. Here at
                    Mploy we strive to deliver innovative solutions with our modern
                    approach to HR Management. We want to make HR management an
                    experience, rather than a task. Sign up and let us show you how.
                </Typography>
                </Box>
              </Item>
            </Grid> */}
          </Grid>
        </Box>
      </div>
    </div >
  );
}
