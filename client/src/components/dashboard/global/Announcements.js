import React, { useState } from "react";
import axios from "axios";

function Announcements() {
  const [announcement, setAnnouncement] = useState({});

  return (
    <div className="announcements_mainbox">
      <div className="announcements_date">
        <div className="announcements_date_start">
          <h3>Start Date</h3>
          <input type="date"></input>
        </div>

        <div className="announcements_date_end">
          <h3>End Date</h3>
          <input type="date"></input>
        </div>
      </div>

      <div className="announcements_title">
        <h3>Title</h3>
        <input
          type="text"
          placeholder="Enter title..."
          name="title"
          onChange={(e) =>
            setAnnouncement({ ...announcement, title: e.target.value })
          }
        ></input>
      </div>

      <div className="announcements_message">
        <h3>Message</h3>
        <textarea
          placeholder="Write message here..."
          name="message"
          onChange={(e) =>
            setAnnouncement({ ...announcement, message: e.target.value })
          }
        ></textarea>
      </div>

      <div className="announcements_poster">
        <h3>Posted By</h3>
        <input
          type="text"
          name="poster"
          onChange={(e) =>
            setAnnouncement({ ...announcement, poster: e.target.value })
          }
        ></input>
      </div>

      <div className="announcements_post">
        <button
          onClick={() => {
            console.log(announcement);
          }}
        >
          POST
        </button>
      </div>
    </div>
  );
}

export default Announcements;
