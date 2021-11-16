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
  const formatType = (str) => {
    if (str === "sick-leave") {
      return "SL";
    } else if (str === "holiday") {
      return "HL";
    } else {
      return "HO";
    }
  };

  //format ring

  return (
    <>
      {getLeaves &&
        getLeaves.map((item) => (
          <div className="leaveapplications_mainbox">
            <div className="leave_classification">
              <div
                className="leave_classification_ring"
                style={
                  item.type === "sick-leave"
                    ? { border: "1px solid #de7456" }
                    : item.type === "holiday"
                    ? { border: "1px solid #a0a0a0" }
                    : { border: "1px solid #ffffff" }
                }
              >
                <div>{formatType(item.type)}</div>
              </div>
            </div>

            <div className="leave_details">
              <div>
                <h1>{item.name}</h1>
                <h1>( {item.department} )</h1>
              </div>

              <div>
                <h5>
                  From <span>{showDate(item.dateFrom)}</span>
                </h5>
                <h5>
                  To <span>{showDate(item.dateTo)}</span>
                </h5>
              </div>
            </div>

            <div className="leave_buttons">
              <h4>APPROVE</h4>

              <h5>REJECT</h5>
            </div>
          </div>
        ))}
    </>
  );
}
export default LeaveApplications;
