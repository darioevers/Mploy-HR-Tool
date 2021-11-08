import React, { useState } from "react";

function WidgetApplications() {
  const [showNewApp, setShowNewApp] = useState(false);

  const onSubmit = () => {
    alert("Implement Submit!");
  };

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
        <button onClick={() => setShowNewApp(!showNewApp)}>
          NEW APPLICATION
        </button>
      </div>
      {showNewApp && (
        <div className="form_main_container">
          <form class="form_container">
            <h1>APPLICATION WIZARD</h1>
            <br />

            <div className="form_search">
              <h3>Employee Name</h3>
              <input
                type="search"
                placeholder="Type name of employee"
                className="application_search"
              />
            </div>

            <div className="form_type">
              <h3>Application Type</h3>
              <select>
                <option value="">Please select type...</option>
                <option value="sick-leave">Sick Leave</option>
                <option value="holiday">Holday</option>
                <option value="home-office">Home Office</option>
              </select>
            </div>

            <div className="form_date">
              <h3>From</h3>
              <input type="date" />

              <h3>To</h3>
              <input type="date" />
            </div>

            <div className="form_buttons">
              <button onClick={onSubmit} type="submit" class="btn_submit">
                Submit
              </button>
              <button
                type="button"
                class="btn_cancel"
                onClick={() => setShowNewApp(!showNewApp)}
              >
                X
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default WidgetApplications;
