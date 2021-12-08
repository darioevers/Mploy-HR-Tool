import React, { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

function LeaveApplications() {
  // fetch leave application data
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
        console.log(data.data);
        setLeaves(data.data.filter((item) => item.pending === true));
      })
      .catch((err) => console.log(err));
  };

  //reject leave application
  const rejectLeaveApplication = (id) => {
    const data = { id, approved: false };
    axios
      .put(`http://localhost:5000/leaves/`, data, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        data.data.success && getAllLeaves();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  //approve leave application
  const approveLeaveApplication = (id) => {
    const data = { id, approved: true };
    axios
      .put(`http://localhost:5000/leaves/`, data, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        data.data.success && getAllLeaves();
        window.location.reload();
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

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <>
      {leaves &&
        leaves.map((item) => (
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
                  {t("dashboardWidgetLeaves.title09")}{" "}
                  <span>{showDate(item.dateFrom)}</span>
                </h5>
                <h5>
                  {t("dashboardWidgetLeaves.title10")}{" "}
                  <span>{showDate(item.dateTo)}</span>
                </h5>
              </div>
            </div>

            <div className="leave_buttons">
              <h4 onClick={() => approveLeaveApplication(item._id)}>
                {t("dashboardRightDrawer.formDesc11")}
              </h4>
              <h5 onClick={() => rejectLeaveApplication(item._id)}>
                {t("dashboardRightDrawer.formDesc12")}
              </h5>
            </div>
          </div>
        ))}
    </>
  );
}
export default LeaveApplications;
