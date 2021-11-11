import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import BookmarkIcon from "@mui/icons-material/Bookmark";

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
          <div>
            <p
              id={show ? "newtask_button_open" : "newtask_button"}
              onClick={handleClick}
            >
              {" "}
              +{" "}
            </p>
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
                <FilterListIcon style={{ fontSize: 15 }} />
              </span>
            </div>
          </div>
          <div className="display_divider">
            <hr />
          </div>

          <div className="tasks">
            <div className="task">
              <div className="task_main">
                <h5> Title </h5>
                <p>
                  Due Date: <span className="task_date">DD MM YYYY</span>
                </p>
              </div>

              <div className="task_icons">
                <p>
                  <CheckIcon style={{ fontSize: 15 }} />
                </p>
                <hr />
                <p>
                  <ClearIcon style={{ fontSize: 15 }} />
                </p>
                <div className="task_tag">
                  <BookmarkIcon style={{ fontSize: 15 }} />
                </div>
              </div>
            </div>

            <div className="task">
              <div className="task_main">
                <h5> Title </h5>
                <p>
                  Due Date: <span className="task_date">DD MM YYYY</span>
                </p>
              </div>

              <div className="task_icons">
                <p>
                  <CheckIcon style={{ fontSize: 15 }} />
                </p>
                <hr />
                <p>
                  <ClearIcon style={{ fontSize: 15 }} />
                </p>
                <div className="task_tag_two">
                  <BookmarkIcon style={{ fontSize: 15 }} />
                </div>
              </div>
            </div>

            <div className="task">
              <div className="task_main">
                <h5> Title </h5>
                <p>
                  Due Date: <span className="task_date">DD MM YYYY</span>
                </p>
              </div>

              <div className="task_icons">
                <p>
                  <CheckIcon style={{ fontSize: 15 }} />
                </p>
                <hr />
                <p>
                  <ClearIcon style={{ fontSize: 15 }} />
                </p>
                <div className="task_tag_three">
                  <BookmarkIcon style={{ fontSize: 15 }} />
                </div>
              </div>
            </div>

            <div className="task">
              <div className="task_main">
                <h5> Title </h5>
                <p>
                  Due Date: <span className="task_date">DD MM YYYY</span>
                </p>
              </div>

              <div className="task_icons">
                <p>
                  <CheckIcon style={{ fontSize: 15 }} />
                </p>
                <hr />
                <p>
                  <ClearIcon style={{ fontSize: 15 }} />
                </p>
                <div className="task_tag_three">
                  <BookmarkIcon style={{ fontSize: 15 }} />
                </div>
              </div>
            </div>

            <div className="task">
              <div className="task_main">
                <h5> Title </h5>
                <p>
                  Due Date: <span className="task_date">DD MM YYYY</span>
                </p>
              </div>

              <div className="task_icons">
                <p>
                  <CheckIcon style={{ fontSize: 15 }} />
                </p>
                <hr />
                <p>
                  <ClearIcon style={{ fontSize: 15 }} />
                </p>
                <div className="task_tag_three">
                  <BookmarkIcon style={{ fontSize: 15 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WidgetTasks;
