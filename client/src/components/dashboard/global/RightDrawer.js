import * as React from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import NewAdmin from "./NewAdmin";
import Announcements from "./Announcements";
import LeaveApplications from "./LeaveApplications";

// MUI IMPORTS
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

// ICON IMPORTS
import SettingsIcon from "@material-ui/icons/Settings";
import { AnnouncementSharp } from "@material-ui/icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const style = {
    marginTop: "50px",
  };
  //close / open newAdmin form
  const [showNewAdmin, setShowNewAdmin] = React.useState(true);

  const handleNewAdmin = () => {
    setShowNewAdmin(!showNewAdmin);
  };

  //close / open newAnnouncement form
  const [showNewAnnouncement, setShowNewAnnouncement] = React.useState(true);
  const handleNewAnnouncement = () => {
    setShowNewAnnouncement(!showNewAnnouncement);
  };

  //close / open leave application
  const [showLeaves, setShowLeaves] = React.useState(true);
  const handleShowLeaves = () => {
    setShowLeaves(!showLeaves);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="right_drawer">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SettingsIcon
            onClick={toggleDrawer(anchor, true)}
            style={{
              padding: "3px",
              backgroundColor: "#2b3240",
              border: "1px solid #2b3240",
              borderRadius: "10px",
              color: "white",
            }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="right_drawer_wrapper">
              <div className="right_drawer_header">
                <Typography variant="h6">
                  <Box
                    sx={{
                      boxShadow: "0",
                      bgcolor: "transparent",
                      color: "#fff",
                    }}
                  >
                    {t("dashboardRightDrawer.title01")}
                  </Box>
                </Typography>
              </div>
            </div>

            <div
              className={
                showNewAdmin
                  ? "right_drawer_newadmin"
                  : "right_drawer_newadmin_open"
              }
            >
              <div className="newadmin_header" onClick={handleNewAdmin}>
                <Typography variant="body1">
                  <Box
                    sx={{
                      boxShadow: "0",
                      bgcolor: "transparent",
                      fontWeight: 500,
                      fontSize: 15,
                    }}
                  >
                    {t("dashboardRightDrawer.title02")}
                  </Box>
                </Typography>

                <i>
                  <KeyboardArrowDownIcon />
                </i>
              </div>

              <div className="newadmin_content">
                <NewAdmin />
              </div>
            </div>

            <div
              className={
                showNewAnnouncement
                  ? "right_drawer_announcements"
                  : "right_drawer_announcements_open"
              }
            >
              <div
                className="right_drawer_announcements_header"
                onClick={handleNewAnnouncement}
              >
                <Typography variant="body1">
                  <Box
                    sx={{
                      boxShadow: "0",
                      bgcolor: "transparent",
                      fontWeight: 500,
                      fontSize: 15,
                    }}
                  >
                    {t("dashboardRightDrawer.title03")}
                  </Box>
                </Typography>

                <i>
                  <KeyboardArrowDownIcon />
                </i>
              </div>

              <div className="right_drawer_announcements_content">
                <Announcements />
              </div>
            </div>

            <div
              className={
                showLeaves ? "right_drawer_leaves" : "right_drawer_leaves_open"
              }
            >
              <div
                className="right_drawer_leaves_header"
                onClick={handleShowLeaves}
              >
                <Typography variant="body1">
                  <Box
                    sx={{
                      boxShadow: "0",
                      bgcolor: "transparent",
                      fontWeight: 500,
                      fontSize: 15,
                    }}
                  >
                    {t("dashboardRightDrawer.title04")}
                  </Box>
                </Typography>

                <i>
                  <KeyboardArrowDownIcon />
                </i>
              </div>

              <div className="right_drawer_leaves_content">
                <LeaveApplications />
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
