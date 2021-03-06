import React, { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

// MUI IMPORTS
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function WidgetTasks() {
  //alertbox
  const [isShowingAlert, setShowingAlert] = useState(false);

  //open and close new task form onClick
  const [showForm, setShowForm] = useState(true);
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const [newArr, setNewArr] = useState();

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
  const [tasks, setTasks] = useState();
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
        setTasks(data.data);
        setNewArr(data.data);
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
        data.data.success && getAllTasks();
        setShowingAlert(true);
      })
      .catch((err) => console.log(err));
  };

  //filter
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
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

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <Box className="widget_tasks_mainbox" sx={{ boxShadow: "0", bgcolor: 'background.widgets' }}>
      <div className="taskwidget_mobile">
        <div className="taskwidget_mobile_header">
          <Typography variant="h10">
            <Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>
              {t("dashboardWidgetTasks.title01")}
            </Box>
          </Typography>

          <div className="add-btn">+</div>
        </div>
      </div>
      <div class={showForm ? "sidenav_open" : "sidenav"}>
        <Typography variant="h6">
          <Box
            sx={{ m: 2, boxShadow: "0", bgcolor: "transparent", color: "#fff" }}
          >
            {t("dashboardWidgetTasks.title01")}
          </Box>
        </Typography>

        <hr />
        <Typography variant="caption">
          <Box
            sx={{
              ml: 2,
              mt: 1,
              boxShadow: "0",
              bgcolor: "transparent",
              color: "#fff",
            }}
          >
            {t("dashboardWidgetTasks.title02")}
          </Box>
        </Typography>

        <input
          className="newtask_input"
          placeholder={t("dashboardWidgetTasks.formDesc01")}
          type="text"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <Typography variant="caption">
          <Box
            sx={{
              ml: 2,
              mt: 1,
              boxShadow: "0",
              bgcolor: "transparent",
              color: "#fff",
            }}
          >
            {t("dashboardWidgetTasks.title03")}
          </Box>
        </Typography>

        <input
          className="newtask_date"
          type="date"
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
        <Typography variant="caption">
          <Box
            sx={{
              ml: 2,
              mt: 1,
              boxShadow: "0",
              bgcolor: "transparent",
              color: "#fff",
            }}
          >
            {t("dashboardWidgetTasks.title04")}
          </Box>
        </Typography>

        <select
          className="newtask_tag"
          onChange={(e) => setTask({ ...task, taskTag: e.target.value })}
        >
          <option>{t("dashboardWidgetTasks.formDesc02")}</option>
          <option>{t("dashboardWidgetTasks.title07")}</option>
          <option>{t("dashboardWidgetTasks.title08")}</option>
          <option>{t("dashboardWidgetTasks.title09")}</option>
        </select>
        <div className="save_btn">
          <button
            onClick={() => {
              addNewTask();
              setTask("");
              window.location.reload();
            }}
          >
            {t("dashboardWidgetTasks.formButton01")}
          </button>
        </div>
        <div className="sidenav_cloak"></div>
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
              <Typography variant="h6">
                <Box
                  sx={{ boxShadow: "0", bgcolor: "background.widgets", fontSize: 12 }}
                >
                  {t("dashboardWidgetTasks.title05")}
                </Box>
              </Typography>
            </div>

            <Box
              sx={{
                boxShadow: "0",
                bgcolor: "transparent",
              }}
              onClick={handleShowFilter}
            >
              <FilterListIcon style={{ fontSize: 15 }} />
            </Box>
          </div>

          <div className="filter_bar">
            {showFilter && (
              <div className={showForm ? "task_filter_open" : "task_filter"}>
                {["All", "High", "Medium", "Low"].map((cat) => {
                  return (
                    <h5
                      onClick={() => {
                        let filteredArr = tasks.filter((item) =>
                          cat === "All" ? item : item.taskTag === cat
                        );
                        setNewArr(filteredArr);
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
            {newArr &&
              newArr.map((task) => (
                <div className="task">
                  <div className="task_main">
                    <h5>
                      {" "}
                      {task.title !== undefined
                        ? task.title
                        : "No Title Specified"}{" "}
                    </h5>
                    <p>
                      {t("dashboardWidgetTasks.title03")}
                      <span className="task_date">
                        {showDate(task.dueDate)}
                      </span>
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
                      {task.taskTag === "High" ? (
                        <h5 style={{ fontSize: 15, color: "red" }}> - </h5>
                      ) : task.taskTag === "Medium" ? (
                        <h5 style={{ fontSize: 15, color: "yellow" }}> - </h5>
                      ) : (
                            <h5 style={{ fontSize: 15, color: "green" }}> - </h5>
                          )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className={`alert alert-success ${
              isShowingAlert ? "alert-shown" : "alert-hidden"
            }`}
            onTransitionEnd={() => setShowingAlert(false)}
          >
            <CheckCircleOutlineIcon />
            <p> Task Deleted</p>
          </div>
        </div>
      </div>
    </Box>
  );
}
export default WidgetTasks;
