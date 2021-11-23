import React, { useState, useEffect } from "react";
import axios from "axios";

function WidgetHomeOffice() {
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
    <div className="widget_homeoffice_mainbox">
      <div className="homeoffice_top_wrapper">
        <div className="square_bullet"></div>
        <h1> Home Office </h1>
      </div>

      <div className="homeoffice_middle_wrapper">
        <h4>Available Days</h4>
        <div className="horizontal_line"></div>
      </div>

      <div className="homeoffice_bottomleft_wrapper">
        {leaves &&
          leaves
            .filter((item) => item.bio.email === "alex.albaran@mploy.com")
            .map((item) => <h2>{item.availableHomeOffice}</h2>)}
        <h4>Available</h4>
      </div>
      <div className="homeoffice_bottommiddle_wrapper">
        <div className="vertical_line"></div>
      </div>
      <div className="homeoffice_bottomright_wrapper">
        <h2>
          {leaves &&
            leaves
              .filter((item) => item.bio.email === "alex.albaran@mploy.com")
              .map((item) => <h2>{item.takenHomeOffice}</h2>)}
        </h2>
        <h4>Days Taken </h4>
      </div>
    </div>
  );
}
export default WidgetHomeOffice;
