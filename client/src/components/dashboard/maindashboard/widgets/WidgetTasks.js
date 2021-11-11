import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

function WidgetTasks() {
  //open and close new task form onClick
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="widget_tasks_mainbox">
      <div class={show ? "sidenav_open" : "sidenav"} onClick={handleClick}>
        <h1>ADD NEW TASK</h1>
        <hr />
        <h2>Task</h2>
        <input type="text" placeholder="Enter Date" className="newtask_input" />
        <h2>Due Date</h2>
        <input type="date" className="newtask_input" />
        <h2>Task Tag</h2>
        <select className="newtask_input">
          <option>Please Select ... </option>
          <option>High Priority - Red </option>
          <option>Medium Priority - Yellow </option>
          <option>Low Priority - Green </option>
        </select>
        <div className="save_btn">
          <button>SAVE</button>
        </div>
      </div>

      <div id={show ? "main_open" : "main"}>
        <div className="widget_tasks_newtask">
          <div
            id={show ? "newtask_button_open" : "newtask_button"}
            onClick={handleClick}
          >
            +
          </div>
        </div>

        <div className="widget_tasks_display">
          <div className="header">
            <div className="header_title">
              <h1>TASK LIST</h1>
            </div>
            <div className="header_icons">
              <p>Filter</p>
              <span>
                <FilterListIcon fontSize="small" />
              </span>
            </div>
          </div>
          <div className="display_divider">
            <hr />
          </div>

          <div className="tasks">
            <div className="task">
              <div className="task_main">
                <p> Title </p>
                <p>Due Date</p>
              </div>

              <div className="task_icons">
                <p>delete</p>
                <p>done</p>
              </div>
            </div>

            <div className="task">
              <div className="task_main">
                <p> Title </p>
                <p>Due Date</p>
              </div>

              <div className="task_icons">
                <p>delete</p>
                <p>done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WidgetTasks;
