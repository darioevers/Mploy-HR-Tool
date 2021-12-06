import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

//  MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// COMPONENT EXPORT
const Aboutintro = () => {
  // TRANSLATION FUNCTION
  const { t } = useTranslation();
  return (
    <div>
      <div className="homearea">
        <Box
          sx={{
            textAlign: "center",
            alignItems: "center",
            marginTop: 15,
            boxShadow: "0",
          }}
        >
          <Typography variant="h3">🤟</Typography>
          <Typography variant="h2">{t("aboutIntro.title01")}</Typography>
          <Box
            sx={{
              display: "table",
              margin: "0 auto",
              maxWidth: "550px",
              marginBottom: 5,
            }}
          >
            <Typography variant="body1">
              <Box sx={{ fontSize: 20 }}>{t("aboutIntro.body01")}</Box>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          <Box className="aboutintro_container">
            <Typography variant="h4">
              <Box sx={{ fontWeight: "light", m: 2, paddingLeft: 2 }}>
                {t("aboutIntro.title02")}
              </Box>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              <Box sx={{ fontSize: 20, m: 2, p: 2 }}>
                {t("aboutIntro.body02")}
              </Box>
            </Typography>
          </Box>
          <Box className="aboutintro_container">
            <Typography variant="h4">
              <Box sx={{ fontWeight: "light", m: 2, paddingLeft: 2 }}>
                {t("aboutIntro.title03")}
              </Box>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              <Box sx={{ fontSize: 20, m: 2, p: 2 }}>
                {t("aboutIntro.body03")}
              </Box>
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Aboutintro;
