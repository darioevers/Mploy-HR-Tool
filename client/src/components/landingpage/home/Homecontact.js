import React, { useContext } from "react";
import { ColorModeContext } from "../../theme/theme";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Homecontact = () => {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Paper elevation={3}>
      <div className="landingpage_contact_backgroundbox">
        <Box
          sx={{
            display: 'flex',
            margin: 0,
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 0,
            p: 3,
          }}
        >
          <div className="homecontact_mainbox">
            <div className="homecontact_left">
              <h1>Try Mploy for Free!</h1>
              <h3>
                Sign up with Mploy today and experience how our HR Management platform
                can help streamline your HR needs.
        </h3>
            </div>
            <div className="homecontact_right">
              <button variant="contained" color="secondary">Sign Up</button>
            </div>
          </div>
        </Box>
      </div>
    </Paper>
  );
};

export default Homecontact;
