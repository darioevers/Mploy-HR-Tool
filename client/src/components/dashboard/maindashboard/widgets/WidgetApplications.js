import React, { useState } from "react";
import axios from "axios";

function WidgetApplications() {
  const [showNewApp, setShowNewApp] = useState(false);

  const handleClick = () => {
    setShowNewApp(!showNewApp);
  };

  //add new leave application
  const [leave, setLeave] = useState({});
  const addLeave = () => {
    const data = leave;
    axios
      .post(
        "http://localhost:5000/leaves/addLeave",
        data,

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
        <button onClick={handleClick}>NEW APPLICATION</button>
      </div>

      <div
        className={
          showNewApp ? "form_main_container_show" : "form_main_container_hide"
        }
      >
        <form class="form_container">
          <h1>APPLICATION WIZARD</h1>
          <br />

          <div className="form_search">
            <h3>Employee Name</h3>
            <input
              type="search"
              placeholder="Type name of employee"
              className="application_search"
              onChange={(e) =>
                setLeave({
                  ...leave,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="form_type">
            <h3>Application Type</h3>
            <select
              onChange={(e) =>
                setLeave({
                  ...leave,
                  type: e.target.value,
                })
              }
            >
              <option value="">Please select type...</option>
              <option value="sick-leave">Sick Leave</option>
              <option value="holiday">Holday</option>
              <option value="home-office">Home Office</option>
            </select>
          </div>

          <div className="form_date">
            <h3>From</h3>
            <input
              type="date"
              onChange={(e) =>
                setLeave({
                  ...leave,
                  dateFrom: e.target.value,
                })
              }
            />

            <h3>To</h3>
            <input
              type="date"
              onChange={(e) =>
                setLeave({
                  ...leave,
                  dateTo: e.target.value,
                })
              }
            />
          </div>

          <div className="form_buttons">
            <button
              type="submit"
              class="btn_submit"
              onClick={() => {
                addLeave();
                setLeave("");
                window.location.reload();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WidgetApplications;
