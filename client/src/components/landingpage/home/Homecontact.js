import React from "react";

// MUI IMPORTS
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// COMPONENT EXPORT
export default function Homecontact(props) {
  // EDIT STRINGS HERE
  const content = {
    '01_mainheading': 'Try Mploy for Free!',
    '02_mainheading': 'Sign up with Mploy today and experience how our HR Management platform can help streamline your HR needs.',
    '01_button': 'TRY NOW',
    ...props.content
  };
  // BUTTON COLORING
  const theme = createTheme({
    palette: {
      button: {
        main: '#fff',
        contrastText: '#fff',
      },
    },
  });
  return (
    <div className="landingpage_contact_backgroundbox">
      <Box
        sx={{
          margin: 0,
          bgcolor: "#ee6c4d",
          color: 'text.alternate',
          p: 5,
          boxShadow: "0",
        }}
      >
        <div className="homearea">
          <Box sx={{
            width: "40vw",
            margin: "0 auto",
            boxShadow: "0",
          }}>
            <Typography variant="h2" fontWeight="500">{content['01_mainheading']}</Typography>
            <Typography variant="h5" fontWeight="400" sx={{ marginBottom: "2rem" }}>
              {content['02_mainheading']}
            </Typography>
            <ThemeProvider theme={theme}>
              <Button color="button" variant="contained">
                {content['01_button']}
              </Button>
            </ThemeProvider>
          </Box>
        </div>
      </Box>
    </div>
  );
};
