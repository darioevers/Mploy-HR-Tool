import React, { useState, useEffect } from "react";
import axios from "axios";

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

      {announcements &&
        announcements.map((announcement) => (
          <div className="widget_announcements_display" key={announcement.id}>
            <div className="widget_announcement_one">{announcement.title}</div>
          </div>
        ))}
    </div>
  );
}
export default WidgetAnnouncements;
