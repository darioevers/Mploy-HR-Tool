import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

function WelcomeMessage({ userdata }) {

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="welcome_message_mainbox">
      <h1>
        Hi{" "}
        <span className="employee_name">
          {userdata.bio?.firstName} {userdata.bio?.lastName}
        </span>
      </h1>

      <Typography variant="body2"><Box sx={{ boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetWelcomeMessage.body01")}</Box></Typography>

    </div>
  );
}
export default WelcomeMessage;
