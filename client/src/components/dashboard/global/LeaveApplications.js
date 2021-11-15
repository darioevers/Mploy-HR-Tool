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

  return (
    <div className="leaveapplications_mainbox">
      {getLeaves &&
        getLeaves.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h5> Type: {item.type}</h5>
            <h5> Date From: {item.dateFrom}</h5>
            <h5> Date To: {item.dateTo}</h5>
          </div>
        ))}
    </div>
  );
}
export default LeaveApplications;
