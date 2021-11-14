import React, { useState, useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios";

function WidgetTasks() {
  //open and close new task form onClick
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(!showForm);
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

  //delete task
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        data.data.success && getAllTasks();
      })
      .catch((err) => console.log(err));
  };

  //filter
  const [showFilter, setShowFilter] = useState(true);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
    console.log("clicked");
  };

  return (
    <div className="widget_tasks_mainbox">
      <div class={showForm ? "sidenav_open" : "sidenav"}>
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
          <option>High Priority</option>
          <option>Medium Priority</option>
          <option>Low Priority</option>
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

      <div id={showForm ? "main_open" : "main"}>
        <div className="widget_tasks_newtask">
          <div>
            <p
              id={showForm ? "newtask_button_open" : "newtask_button"}
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

            <div className="header_icons" onClick={handleShowFilter}>
              <p>Filter</p>
              <span>
                <FilterListIcon style={{ fontSize: 15 }} />
              </span>
            </div>
          </div>

          <div className="filter_bar">
            {showFilter && (
              <div className={showForm ? "task_filter_open" : "task_filter"}>
                {[
                  "All",
                  "High Priority",
                  "Medium Priority",
                  "Low Priority",
                ].map((cat) => {
                  return (
                    <h5
                      onClick={() => {
                        let filteredArr = getTasks.filter((item) =>
                          cat === "All" ? item : item.taskTag === cat
                        );
                        setGetTasks(filteredArr);
                      }}
                      className="filter"
                    >
                      {cat}
                    </h5>
                  );
                })}
              </div>
            )}
          </div>

          <div className="display_divider">
            <hr />
          </div>

          <div className="tasks">
            {getTasks &&
              getTasks.map((task, i) => (
                <div className="task">
                  <div className="task_main" key={i}>
                    <h5> {task.title} </h5>
                    <p>
                      Due Date:{" "}
                      <span className="task_date">{task.dueDate}</span>
                    </p>
                  </div>

                  <div className="task_icons">
                    <p>
                      <CheckIcon style={{ fontSize: 15 }} />
                    </p>
                    <hr />
                    <p>
                      <ClearIcon
                        style={{ fontSize: 15 }}
                        onClick={() => deleteTask(task._id)}
                      />
                    </p>
                    <div className="task_tag">
                      {task.taskTag === "High Priority" ? (
                        <BookmarkIcon style={{ fontSize: 15, color: "red" }} />
                      ) : task.taskTag === "Medium Priority" ? (
                        <BookmarkIcon
                          style={{ fontSize: 15, color: "yellow" }}
                        />
                      ) : (
                        <BookmarkIcon
                          style={{ fontSize: 15, color: "green" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default WidgetTasks;
