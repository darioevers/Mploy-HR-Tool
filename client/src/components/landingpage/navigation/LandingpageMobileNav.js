import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// IMAGE IMPORTS
import LogoDarkS from "../../../img/logo/MPLOY_logo_small_dark.svg";

// ICON IMPORTS
import LoginIcon from "@mui/icons-material/Login";
import DragHandleIcon from "@mui/icons-material/DragHandle";

// DARK MODE TOGGLE IMPORT
import { ColorModeContext } from "../../theme/theme";

// MUI IMPORTS
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Box from "@mui/material/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: "About", target: "/about" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function LandingpageMobileNav() {
  const [direction, setDirection] = React.useState("up");
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  return (
    <Box sx={{ boxShadow: "0" }}>
      <SpeedDial
        direction="down"
        ariaLabel="SpeedDial"
        FabProps={{
          style: {
            bgcolor: "rgb(238,108,77)",
            background:
              "linear-gradient(149deg, rgba(238,108,77,1) 0%, rgba(152,193,217,1) 100%)",
            backdropFilter: "blur(400px)",
            borderRadius: 7,
            width: "5rem",
            heigth: "10px",
          },
        }}
        sx={{
          position: "fixed",
          top: "1rem",
          zIndex: "100",
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "0",
        }}
        icon={<DragHandleIcon sx={{ color: "white" }} />}
      >
        Test
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.target}
            FabProps={{
              style: {
                bgcolor: "#fff",
                borderRadius: 7,
                width: "5rem",
                heigth: "10px",
              },
            }}
          ></SpeedDialAction>
        ))}
      </SpeedDial>
    </Box>
  );
}

// function LandingpageMobileNav() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   return (
//     <Box
//       sx={{
//         boxShadow: "0",
//         position: "fixed",
//         top: "0",
//       }}
//     >
//       <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
//         <List>
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/">Home</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider />
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/about">About</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider />
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/contact">Contact</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider />
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/about">Faq</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider />
//         </List>
//       </Drawer>
//       <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
//         <MenuIcon />
//       </IconButton>
//     </Box>
//   );
// }
// export default LandingpageMobileNav;
