import React, { useState } from "react";

function WidgetApplications() {
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  return (
    <div className="widget_applications_mainbox">
      <div className="widget_applications_header">
        <h1> APPLICATIONS</h1>
        <div className="horizontal_line"></div>
      </div>

      <div className="widget_applications_pending">
        <h1>0</h1>
        <h4>Pending</h4>
      </div>

      <div className="widget_applications_approved">
        <h1>5</h1>
        <h4>Approved</h4>
      </div>

      <div className="widget_applications_new">
        <button onClick={openForm}>NEW APPLICATION</button>
      </div>

      <div class="form-popup" id="myForm">
        <form class="form-container">
          <h1>APPLICATION WIZARD</h1>

          <h2>Type of Application</h2>

          <select>
            <option value="sick-leave">Sick Leave</option>
            <option value="holiday">Holday</option>
            <option value="home-office">Home Office</option>
          </select>

          <h2>From</h2>
          <input type="date" />

          <h2>To</h2>
          <input type="date" />

          <button type="submit" class="btn">
            Submit
          </button>
          <button type="button" class="btn cancel" onClick={closeForm}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
export default WidgetApplications;
