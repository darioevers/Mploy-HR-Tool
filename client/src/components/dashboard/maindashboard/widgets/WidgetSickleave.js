import React from "react";

function WidgetSickLeave() {
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
        <h2>4</h2>
        <h4>Taken</h4>
      </div>
    </div>
  );
}
export default WidgetSickLeave;
