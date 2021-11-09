import * as React from "react";
import { ColorModeContext } from "../../theme/theme";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
// import Switch from "@mui/material/Switch";
// import { styled } from "@mui/material/styles";
// import FormControlLabel from "@mui/material/FormControlLabel";

function DarkModeSwitch() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  // const DarkModeSwitch = styled((props) => (
  //   <Switch
  //     focusVisibleClassName=".Mui-focusVisible"
  //     disableRipple
  //     {...props}
  //   />
  // ))(({ theme }) => ({
  //   marginLeft: "25px",
  //   width: 50,
  //   height: 30,
  //   padding: 1.8,
  //   "& .MuiSwitch-switchBase": {
  //     padding: 1,
  //     margin: 2,
  //     transitionDuration: "300ms",
  //     "&.Mui-checked": {
  //       transform: "translateX(16px)",
  //       color: "#fff",
  //       "& + .MuiSwitch-track": {
  //         backgroundColor: theme.palette.mode === "dark" ? "white" : "#2b3240",
  //         opacity: 1,
  //         border: "1px solid #2b3240",
  //       },
  //       "&.Mui-disabled + .MuiSwitch-track": {
  //         opacity: 0.5,
  //       },
  //     },
  //     "&.Mui-focusVisible .MuiSwitch-thumb": {
  //       color: "#33cf4d",
  //       border: "6px solid #fff",
  //     },
  //     "&.Mui-disabled .MuiSwitch-thumb": {
  //       backgroundColor:
  //         theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
  //     },
  //     "&.Mui-disabled + .MuiSwitch-track": {
  //       opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
  //     },
  //   },
  //   "& .MuiSwitch-thumb": {
  //     boxSizing: "border-box",
  //     width: 16,
  //     height: 16,
  //     margin: "5px 6px",
  //   },
  //   "& .MuiSwitch-track": {
  //     borderRadius: "50px",
  //     backgroundColor: theme.palette.mode === "light" ? "white" : "#2b3240",
  //     border: "1px solid black",
  //     opacity: 1,
  //     transition: theme.transitions.create(["background-color"], {
  //       duration: 500,
  //     }),
  //   },
  // }));
  // const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="darkmode_switch">
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>

      {/* <FormControlLabel
        control={<DarkModeSwitch sx={{ m: 0 }} defaultunchecked />}
        label=""
      /> */}
    </div>
  );
}

export default DarkModeSwitch;
