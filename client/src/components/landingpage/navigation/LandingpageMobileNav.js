import React from "react";
import { Link } from "react-router-dom";

// IMAGE IMPORTS

// ICON IMPORTS
import DragHandleIcon from "@mui/icons-material/DragHandle";

// DARK MODE TOGGLE IMPORT
import { ColorModeContext } from "../../theme/theme";

// MUI IMPORTS
import Box from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
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
