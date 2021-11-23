import React, { useState, useEffect } from "react";
import axios from "axios";

function WidgetHolidays() {
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
    <div className="widget_holidays_mainbox">
      <div className="holidays_top_wrapper">
        <div className="square_bullet"></div>
        <h1> Holidays</h1>
      </div>

      <div className="holidays_middle_wrapper">
        <h4>Available Days</h4>
        <div className="horizontal_line"></div>
      </div>

      <div className="holidays_bottomleft_wrapper">
        {leaves &&
          leaves
            .filter((item) => item.bio.email === "alex.albaran@mploy.com")
            .map((item) => <h2>{item.availableHolidays}</h2>)}
        <h4>Available</h4>
      </div>

      <div className="holidays_bottommiddle_wrapper">
        <div className="vertical_line"></div>
      </div>

      <div className="holidays_bottomright_wrapper">
        {leaves &&
          leaves
            .filter((item) => item.bio.email === "alex.albaran@mploy.com")
            .map((item) => <h2>{item.takenHolidays} </h2>)}
        <h4>Days Taken</h4>
      </div>
    </div>
  );
}
export default WidgetHolidays;
