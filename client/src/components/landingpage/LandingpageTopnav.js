// FIND NEW TOPNAV IN /navigation

// import React, { useState, Component, Suspense } from "react";
// import { Link } from "react-router-dom";

// // TRANSLATION IMPORTS
// import LanguageSwitch from "../../translations/languageSwitch";
// import { useTranslation } from "react-i18next";

// // IMAGE IMPORTS
// import LogoDarkS from "../../img/logo/MPLOY_logo_small_dark.svg";

// // ICON IMPORTS
// import LoginIcon from "@mui/icons-material/Login";

// // DARK MODE TOGGLE IMPORT
// import { ColorModeContext } from "../theme/theme";

// // MUI IMPORTS
// import { useTheme } from "@mui/material/styles";
// import Button from "@material-ui/core/Button";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// // humberger menu
// import Hidden from "@material-ui/core/Hidden";
// import MenuIcon from "@material-ui/icons/Menu";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Divider from "@material-ui/core/Divider";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";

// const useStyles = makeStyles((theme) => ({
//   listDesign: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent:"spaceevenly",
//     fontSize: "1rem",
//     marginLeft: "20px",

//   },
//   aboutItem: {
//     marginLeft: "30px",

//     // leftPadding: 10
//   },
//   hbMenu: {
//     color: "black",

//   },
// }));
// const LandingpageTopnav = () => {
//   const classes = useStyles();
//   const colorMode = React.useContext(ColorModeContext);
//   const theme = useTheme();
//   const { t } = useTranslation();
//   const [open, setOpen] = useState(false);

//   return (
//     <Box
//       sx={{
//         boxShadow: "0",
//       }}
//     >
//       <div className="landingpage_topnav_backgroundbox">
//         <Box
//           id="landingpagetopnavbox"
//           sx={{
//             bgcolor: "landingpagenavbar.main",
//             borderRadius: "0px",
//             backdropFilter: "blur(4px)",
//             boxShadow: "0",
//           }}
//         >
//           <div className="landingpage_topnav_mainbox">
//             <div className="landingpage_topnav_logobox">
//               <Link to={"/"} color="inherit">
//                 <img src={LogoDarkS} alt="Logo"></img>
//               </Link>
//             </div>
//             <Hidden xsDown>
//               <div className="landingpage_topnav_menulinks">
//                 <Link to={"/solutions"} color="inherit">
//                   <Typography
//                     variant="h6"
//                     id="landingpage_navlink"
//                     fontWeight="400"
//                   >
//                     {t("landingNavbar.link01")}
//                   </Typography>
//                 </Link>

//                 <Link to={"/about"} color="inherit">
//                   <Typography
//                     variant="h6"
//                     id="landingpage_navlink"
//                     fontWeight="400"
//                   >
//                     {t("landingNavbar.link02")}
//                   </Typography>
//                 </Link>
//               </div>
//             </Hidden>

//             <div className="landingpage_topnav_buttons">
//               <LanguageSwitch />
//               <IconButton
//                 sx={{ ml: 1 }}
//                 onClick={colorMode.toggleColorMode}
//                 color="inherit"
//               >
//                 {theme.palette.mode === "dark" ? (
//                   <Brightness7Icon />
//                 ) : (
//                   <Brightness4Icon />
//                 )}
//               </IconButton>

//               <Hidden xsDown>
//                 <div className="landingpage_topnav_contactbutton">
//                   <Link to={"/contact"}>
//                     <Button variant="outlined">
//                       {t("landingNavbar.button01")}
//                     </Button>
//                   </Link>
//                 </div>
//                 <div className="landingpage_topnav_loginbutton">
//                   <Link to={"/login"}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       endIcon={<LoginIcon />}
//                     >
//                       {t("landingNavbar.button02")}
//                     </Button>
//                   </Link>
//                 </div>
//               </Hidden>

//               <Hidden smUp>
//                 <div className={classes.hbMenu}>
//                   <IconButton onClick={() => setOpen(true)}>
//                     <MenuIcon />
//                   </IconButton>
//                 </div>
//               </Hidden>
//               <SwipeableDrawer
//                 anchor="right"
//                 open={open}
//                 onOpen={() => setOpen(true)}
//                 onClose={() => setOpen(false)}
//               >
//
//                 <div
//                   className={classes.chevron}
//                   onClick={() => setOpen(false)}
//                   onKeyPress={() => setOpen(false)}
//                 >
//                   {" "}
//
//                   <IconButton>
//                     <ChevronRightIcon />
//                   </IconButton>{" "}
//
//                 </div>

//                 <Divider />
//                     {" "}

//                   <List className={classes.listDesign}>
//                     <Link to={"/solutions"} color="inherit" >
//                       <Typography style={{ fontWeight: 500 ,margin:"3px"}}>{t("landingNavbar.link01")}</Typography>
//                     </Link>

//                     <Link to={"/about"} color="inherit">
//                       <Typography style={{ fontWeight: 500,margin:"3px" }}>{t("landingNavbar.link02")}</Typography>
//                     </Link>

//                     <Link to={"/contact"}>
//                       <Typography style={{ fontWeight: 500,margin:"3px" }}>{t("landingNavbar.button01")}</Typography>
//                     </Link>

//                     <Link to={"/login"}>
//                       <Typography style={{ fontWeight: 500 ,margin:"3px"}}>{t("landingNavbar.button02")}</Typography>
//                     </Link>
//                   </List>

//
//               </SwipeableDrawer>
//             </div>
//           </div>
//         </Box>
//       </div>
//     </Box>
//   );
// };

// export default LandingpageTopnav;
