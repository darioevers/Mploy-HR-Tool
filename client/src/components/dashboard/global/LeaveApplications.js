import React, { useState, useEffect } from "react";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import CheckIcon from "@mui/icons-material/Check";
// import ClearIcon from "@mui/icons-material/Clear";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios";

function LeaveApplications() {
  // fetch leave application data
  const [getLeaves, setGetLeaves] = useState();
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
        console.log(data.data);
        setGetLeaves(data.data);
      })
      .catch((err) => console.log(err));
  };

  //reject leave application
  const rejectLeaveApplication = (id) => {
    axios
      .delete(`http://localhost:5000/leaves/${id}`, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        data.data.success && getAllLeaves();
      })
      .catch((err) => console.log(err));
  };

  //formatting date
  const showDate = (stringDate) => {
    const date = new Date(stringDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getYear() + 1900;
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    if ((day && months[month] && year !== NaN) || undefined) {
      return `${day} ${months[month]} ${year}`;
    } else {
      return ` Not Specified`;
    }
  };

  //formatting type of leave
  const capitalizeString = (str) => str.toUpperCase();

  return (
    <>
      {getLeaves &&
        getLeaves.map((item) => (
          <div className="leaveapplications_mainbox">
            <div className="leavebox_left">
              <h1>{item.name}</h1>
              <h5>
                {" "}
                Application Type:{" "}
                <span className="data">{capitalizeString(item.type)}</span>
              </h5>
              <div className="leave_date">
                <p>
                  From: <span className="data">{showDate(item.dateFrom)}</span>
                </p>
                <p>
                  To: <span className="data">{showDate(item.dateTo)}</span>
                </p>
              </div>
            </div>

            <div className="leavebox_right">
              <button>APPROVE</button>
              <button>REJECT</button>
            </div>
          </div>
        ))}
    </>
  );
}
export default LeaveApplications;
