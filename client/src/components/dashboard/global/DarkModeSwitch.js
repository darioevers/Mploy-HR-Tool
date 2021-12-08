import * as React from "react";
import { ColorModeContext } from "../../theme/theme";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

function DarkModeSwitch() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

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
    </div>
  );
}

export default DarkModeSwitch;
