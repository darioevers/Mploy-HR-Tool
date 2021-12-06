import React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import ContactCarousel from "./ContactsCarousel";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

// ICON IMPORTS
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InfoIcon from "@material-ui/icons/Info";

function WidgetTeam() {
  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="widget_team_mainbox">
      {/* Team Header */}
      <div className="team_header_top">
        <Typography variant="h6"><Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetTeam.title01")}</Box></Typography>

        <div className="horizontal_line"></div>
      </div>

      {/* Manager Wrapper */}
      <div className="team_manager_wrapper">
        <div>
          <div className="team_manager_photo_wrapper">
            <div className="team_manager_photo"></div>
            <div className="team_manager_links">
              <div>
                <MailOutlineIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
            </div>
          </div>

          <div className="team_manager_title">
            <Typography><Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 10 }}>{t("dashboardWidgetTeam.jobtitle01")}</Box></Typography>
          </div>
        </div>
      </div>

      {/* Supervisor */}
      <div className="team_supervisor_wrapper">
        <div>
          <div className="team_supervisor_photo_wrapper">
            <div className="team_supervisor_photo"></div>
            <div className="team_supervisor_links">
              <div>
                <MailOutlineIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
            </div>
          </div>

          <div className="team_supervisor_title">
            <Typography><Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 10 }}>{t("dashboardWidgetTeam.jobtitle02")}</Box></Typography>

          </div>
        </div>
      </div>

      {/* IT Manager / Supervisor */}
      <div className="team_it_one_wrapper">
        <div>
          <div className="team_it_one_photo_wrapper">
            <div className="team_it_one_photo"></div>
            <div className="team_it_one_links">
              <div>
                <MailOutlineIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
            </div>
          </div>

          <div className="team_it_one_title">
            <Typography><Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 10 }}>{t("dashboardWidgetTeam.jobtitle03")}</Box></Typography>

          </div>
        </div>
      </div>

      {/* IT Support */}
      <div className="team_it_two_wrapper">
        <div>
          <div className="team_it_two_photo_wrapper">
            <div className="team_it_two_photo"></div>
            <div className="team_it_two_links">
              <div>
                <MailOutlineIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
            </div>
          </div>

          <div className="team_it_two_title">
            <Typography><Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 10 }}>{t("dashboardWidgetTeam.jobtitle04")}</Box></Typography>

          </div>
        </div>
      </div>

      {/* Contacts Header */}
      <div className="team_header_bottom">
        <Typography variant="h6"><Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetContacts.title01")}</Box></Typography>

        <div className="horizontal_line"></div>
      </div>

      {/* Contacts Wrapper */}
      <div className="team_contacts_wrapper">
        <ContactCarousel />
      </div>
    </div>
  );
}
export default WidgetTeam;
