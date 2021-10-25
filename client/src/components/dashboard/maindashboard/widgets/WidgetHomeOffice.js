import React from "react";

function WidgetHomeOffice() {
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
        <h2>21</h2>
        <h4>Available</h4>
      </div>

      <div className="homeoffice_bottomleft_line_wrapper">
        <div className="vertical_line"></div>
      </div>

      <div className="homeoffice_bottommiddle_wrapper">
        <h2>10</h2>
        <h4>Planned</h4>
      </div>

      <div className="homeoffice_bottommiddle_line_wrapper">
        <div className="vertical_line"></div>
      </div>
      <div className="homeoffice_bottomright_wrapper">
        <h2>4</h2>
        <h4>Taken</h4>
      </div>
    </div>
  );
}
export default WidgetHomeOffice;
