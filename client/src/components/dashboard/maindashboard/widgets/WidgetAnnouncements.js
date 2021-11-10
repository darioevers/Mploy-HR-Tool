import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

function WidgetAnnouncements() {
  const [announcements, setAnnouncements] = useState();
  useEffect(() => {
    getAllAnnouncements();
  }, []);
  // fetching data from backend
  const getAllAnnouncements = () => {
    axios
      .get(
        "http://localhost:5000/announcements/announcements",

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((data) => {
        console.log(data.data);
        setAnnouncements(data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="widget_announcements_mainbox">
      <div className="widget_announcements_header">
        <h1>ANNOUNCEMENTS</h1>
      </div>
      <div className="widget_announcements_display">
        {announcements &&
          announcements.map((announcement) => (
            <div className="widget_announcement" key={announcement.id}>
              <div className="widget_announcement_header">
                <div>{announcement.title}</div>
                <p> Posted by: {announcement.poster}</p>
              </div>
              <div className="widget_announcement_icons">
                <div className="widget_announcement_delete">
                  <DeleteForeverIcon fontSize="small" />
                </div>
                <div className="widget_announcement_delete">
                  <AspectRatioIcon fontSize="small" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default WidgetAnnouncements;
