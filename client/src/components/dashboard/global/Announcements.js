import React, { useState } from "react";

function Announcements() {
  const submitAnnouncement = () => {
    alert("Implement Submit!");
  };
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
        <input type="text" placeholder="Enter title..."></input>
      </div>

      <div className="announcements_message">
        <h3>Message</h3>
        <textarea placeholder="Write message here..."></textarea>
      </div>

      <div className="announcements_poster">
        <h3>Posted By</h3>
        <input type="text"></input>
      </div>

      <div className="announcements_post">
        <button onClick={submitAnnouncement}>POST</button>
      </div>
    </div>
  );
}

export default Announcements;
