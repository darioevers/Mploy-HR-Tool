import * as React from "react";

import Drawer from "@mui/material/Drawer";
import SettingsIcon from "@material-ui/icons/Settings";

import NewAdmin from "./NewAdmin";
import Announcements from "./Announcements";
import { AnnouncementSharp } from "@material-ui/icons";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

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
            <div className="right_drawer_header">
              <h3>ADMIN / HR DRAWER </h3>
            </div>

            <div className="right_drawer_newadmin">
              <h4>ADD NEW ADMIN</h4>
              <hr />
              <NewAdmin />
            </div>

            <div className="right_drawer_announcements">
              <h4>CREATE AN ANNOUNCEMENT</h4>
              <hr />
              <p>Announcements appear to all users in the maindashboard.</p>
              <Announcements />
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
