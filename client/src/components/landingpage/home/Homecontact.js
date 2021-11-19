import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// COMPONENT EXPORT
export default function Homecontact(props) {
  // languageSwitch FUNCTION
  const { t } = useTranslation();
  // BUTTON COLORING
  const theme = createTheme({
    palette: {
      button: {
        main: "#fff",
        contrastText: "#fff",
      },
    },
  });
  return (
    <div className="landingpage_contact_backgroundbox">
      <Box
        sx={{
          margin: 0,
          bgcolor: "#ee6c4d",
          color: "text.alternate",
          p: 5,
          boxShadow: "0",
        }}
      >
        <div className="homearea">
          <Box
            sx={{
              width: "40vw",
              margin: "0 auto",
              boxShadow: "0",
            }}
          >
            <Typography variant="h2" fontWeight="500">
              {t("landingHomeContact.title01")}
            </Typography>
            <Typography
              variant="h5"
              fontWeight="400"
              sx={{ marginBottom: "2rem" }}
            >
              {t("landingHomeContact.title02")}
            </Typography>
            <ThemeProvider theme={theme}>
              <Button color="button" variant="contained">
                {t("landingHomeContact.button01")}
              </Button>
            </ThemeProvider>
          </Box>
        </div>
      </Box>
    </div>
  );
}
