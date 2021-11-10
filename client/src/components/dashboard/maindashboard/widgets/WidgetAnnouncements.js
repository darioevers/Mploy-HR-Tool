import React, { useState } from "react";
import axios from "axios";

function WidgetAnnouncements() {
  return (
    <div className="widget_announcements_mainbox">
      <div className="widget_announcements_header">
        <h1>ANNOUNCEMENTS</h1>
      </div>

      <div className="widget_announcements_display">
        <div className="widget_announcement_one">1</div>
        <div className="widget_announcement_two">2</div>
        <div className="widget_announcement_three">3</div>
      </div>
    </div>
  );
}
export default WidgetAnnouncements;
