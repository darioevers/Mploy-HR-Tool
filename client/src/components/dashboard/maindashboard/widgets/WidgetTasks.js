import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios";

function WidgetTasks() {
  //open and close new task form onClick
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  //add new task
  const [task, setTask] = useState({});
  const addNewTask = () => {
    const data = task;
    axios
      .post(
        "http://localhost:5000/tasks/addtask",
        data,

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // fetch tasks data
  const [getTasks, setGetTasks] = useState();
  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    axios
      .get(
        "http://localhost:5000/tasks/tasks",

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((data) => {
        console.log(data.data);
        setGetTasks(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (

    <div className="widget_tasks_mainbox">
      <div class={show ? "sidenav_open" : "sidenav"}>
        <h1>ADD NEW TASK</h1>
        <hr />
        <h2>Task</h2>
        <input
          className="newtask_input"
          placeholder="Enter Task"
          type="text"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <h2>Due Date</h2>
        <input
          className="newtask_date"
          type="date"
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
        <h2>Task Tag</h2>
        <select
          className="newtask_tag"
          onChange={(e) => setTask({ ...task, taskTag: e.target.value })}
        >
          <option>Please Select ... </option>
          <option>High Priority - Red </option>
          <option>Medium Priority - Yellow </option>
          <option>Low Priority - Green </option>
        </select>
        <div className="save_btn">
          <button
            onClick={() => {
              addNewTask();
              setTask("");
              window.location.reload();
            }}
          >
            SAVE
          </button>
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

  
        {getTasks &&
          getTasks.map((task) => (
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
            </div>
      
            ))}
        </div>
  )
}
export default WidgetTasks;
