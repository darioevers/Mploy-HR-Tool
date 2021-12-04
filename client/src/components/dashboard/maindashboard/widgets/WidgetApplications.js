import React, { useState, useEffect } from "react";
import axios from "axios";
import consolaGlobalInstance from "consola";
import CloseIcon from "@mui/icons-material/Close";
import e from "cors";

function WidgetApplications({ userdata }) {
  //fetch leaves data
  const [leaves, setLeaves] = useState();

  useEffect(() => {
    getAllLeaves();
  }, []);

  const getAllLeaves = () => {
    axios
      .get(
        "http://localhost:5000/leaves/getLeaves",

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((data) => {
        setLeaves(data.data);
      })
      .catch((err) => console.log(err));
  };

  //show app
  const [showNewApp, setShowNewApp] = useState(false);

  const handleShow = () => {
    setShowNewApp(!showNewApp);
  };

  // add new leave application
  const [newLeave, setNewLeave] = useState();
  // useEffect(() => {
  //   setNewLeave(userdata);
  // }, [userdata]);

  const addLeave = () => {
    const data = newLeave;

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
      <div className="widget_applications_body">
        <div className="widget_applications_pending">
          <h1>
            {leaves && leaves.filter((item) => item.pending === true).length}
          </h1>
          <h4>Pending</h4>
        </div>
        <div className="widget_applications_approved">
          <h1>
            {leaves && leaves.filter((item) => item.pending === false).length}
          </h1>
          <h4>Approved</h4>
        </div>
        <div className="widget_applications_new">
          <div onClick={handleShow}> NEW APPLICATION </div>
        </div>
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
              name="name"
              type="text"
              placeholder="Type name of employee"
              className="application_search"
              value={`${userdata?.bio?.firstName} ${userdata?.bio?.lastName} `}
              onChange={(e) =>
                setNewLeave({
                  ...newLeave,
                  name: e.target.value,
                })
              }
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form_search">
            <h3>Email</h3>
            <input
              name="email"
              type="text"
              placeholder="Type email"
              className="email"
              value={userdata?.bio?.email}
              onChange={(e) =>
                setNewLeave({
                  ...newLeave,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form_search">
            <h3>Department</h3>
            <input
              name="department"
              type="text"
              placeholder="Enter Department"
              className="application_search"
              value="department"
              // onSubmit={(e) =>
              //   setNewLeave({
              //     ...newLeave,
              //     department: e.target.value,
              //   })
              // }
            />
          </div>

          <div className="form_type">
            <h3>Application Type</h3>
            <select
              onChange={(e) =>
                setNewLeave({
                  ...newLeave,
                  type: e.target.value,
                })
              }
            >
              <option value="">Please select type...</option>
              <option value="sick-leave">Sick Leave</option>
              <option value="holiday">Holiday</option>
              <option value="home-office">Home Office</option>
            </select>
          </div>

          <div className="form_date">
            <h3>From</h3>
            <input
              type="date"
              onChange={(e) => {
                setNewLeave({
                  ...newLeave,
                  dateFrom: e.target.value,
                });
              }}
            />

            <h3>To</h3>
            <input
              type="date"
              onChange={(e) => {
                setNewLeave({
                  ...newLeave,
                  dateTo: e.target.value,
                });
              }}
            />
          </div>

          <div className="form_buttons">
            <div
              type="submit"
              class="btn_submit"
              onClick={() => {
                addLeave();
                setNewLeave("");
                window.location.reload();
              }}
            >
              Submit
            </div>
            <div class="btn_cancel" onClick={handleShow}>
              <CloseIcon />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WidgetApplications;
