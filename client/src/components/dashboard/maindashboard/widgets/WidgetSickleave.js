import React, { useState, useEffect } from "react";
import axios from "axios";

function WidgetSickLeave() {
  //fetch leaves data
  const [leaves, setLeaves] = useState();
  useEffect(() => {
    getAllLeaves();
  }, []);

  const getAllLeaves = () => {
    axios
      .get(
        "http://localhost:5000/employee/allemployee",

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

  return (
    <div className="widget_sickleave_mainbox">
      <div className="sickleave_top_wrapper">
        <div className="square_bullet"></div>
        <h1> Sick Leave </h1>
      </div>

      <div className="sickleave_middle_wrapper">
        <h4>Available Days</h4>
        <div className="horizontal_line"></div>
      </div>

      <div className="sickleave_bottomleft_wrapper">
        <h2>Unli.</h2>
        <h4>Available</h4>
      </div>
      <div className="sickleave_bottommiddle_wrapper">
        <div className="vertical_line"></div>
      </div>
      <div className="sickleave_bottomright_wrapper">
        <h2>
          {leaves &&
            leaves
              .filter((item) => item.bio.email === "mark.albaran@outlook.com")
              .map((item) => <h2>{item.takenSickLeave}</h2>)}
        </h2>
        <h4>Days Taken</h4>
      </div>
    </div>
  );
}
export default WidgetSickLeave;
