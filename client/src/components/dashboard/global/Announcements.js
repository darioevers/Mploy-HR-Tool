import React from "react";

function Announcements() {
  return (
    <div className="announcements_mainbox">
      <div className="announcements_date">
        <div className="announcements_date_start">
          <h3>Start Date</h3>
          <input type="date"></input>
        </div>

        <div className="announcements_date_end">
          <h3>Start Date</h3>
          <input type="date"></input>
        </div>
      </div>

      <div className="announcements_title">
        <h3>Title</h3>
        <input type="text"></input>
      </div>

      <div className="announcements_message">
        <h3>Message</h3>
        <input type="text"></input>
      </div>

      <div className="announcements_post">
        <button>POST</button>
      </div>
    </div>
  );
}

export default Announcements;