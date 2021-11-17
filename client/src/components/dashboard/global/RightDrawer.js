import * as React from "react";
import Drawer from "@mui/material/Drawer";
import SettingsIcon from "@material-ui/icons/Settings";
import NewAdmin from "./NewAdmin";
import Announcements from "./Announcements";
import LeaveApplications from "./LeaveApplications";
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
                <h3>ADMIN / HR DRAWER </h3>
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
                <h4>ADD NEW ADMIN</h4>
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
                <h4>POST AN ANNOUNCEMENT</h4>
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
                <h4>LEAVE APPLICATIONS</h4>
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
