import React, { useState, useEffect } from "react";
import axios from "axios";
import consolaGlobalInstance from "consola";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

// ICON IMPORTS
import CloseIcon from "@mui/icons-material/Close";
import e from "cors";

function WidgetApplications({ userdata }) {
  //fetch leaves data
  const [leaves, setLeaves] = useState();

  useEffect(() => {
    getAllLeaves();
  }, []);

  const getAllLeaves = () => {
    axios
      .get(
        "http://localhost:5000/leaves/getLeaves",

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

  //show app
  const [showNewApp, setShowNewApp] = useState(false);

  const handleShow = () => {
    setShowNewApp(!showNewApp);
  };

  // add new leave application
  const [newLeave, setNewLeave] = useState();
  // useEffect(() => {
  //   setNewLeave(userdata);
  // }, [userdata]);

  const addLeave = () => {
    const data = newLeave;

    axios
      .post(
        "http://localhost:5000/leaves/addLeave",
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

  //get difference between two dates
  // const daysBetween = (one, two) => {
  //   let date1 = new Date(one);
  //   let date2 = new Date(two);
  //   let result = Math.round(Math.abs(+date1 - +date2) / 8.64e7);
  //   console.log(one, two);
  //   console.log(result);
  //   return setX({ ...x, test: result });
  //   // return setNewLeave({ ...newLeave, leavesApplied: "result" });

  //   // console.log(Math.round(Math.abs(+date1 - +date2) / 8.64e7));
  // };

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="widget_applications_mainbox">
      <div className="widget_applications_header">
        <Typography variant="h6"><Box sx={{ ml: 3, mt: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetLeaves.title01")}</Box></Typography>

        <div className="horizontal_line"></div>
      </div>
      <div className="widget_applications_body">
        <div className="widget_applications_pending">
          <h1>
            {leaves && leaves.filter((item) => item.pending === true).length}
          </h1>
          <Typography variant="caption"><Box sx={{ boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetLeaves.title02")}</Box></Typography>

        </div>
        <div className="widget_applications_approved">
          <h1>
            {leaves && leaves.filter((item) => item.pending === false).length}
          </h1>
          <Typography variant="caption"><Box sx={{ boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetLeaves.title03")}</Box></Typography>

        </div>
        <div className="widget_applications_new">
          <div onClick={handleShow}>{t("dashboardWidgetLeaves.button01")}</div>
        </div>
      </div>

      <div
        className={
          showNewApp ? "form_main_container_show" : "form_main_container_hide"
        }
      >
        <form class="form_container">
          <Typography variant="h6"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff", textAlign: "center" }}>{t("dashboardWidgetLeaves.title04")}</Box></Typography>

          <br />

          <div className="form_search">
            <Typography variant="body2"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}>{t("dashboardWidgetLeaves.title05")}</Box></Typography>

            <input
              name="name"
              placeholder={t("dashboardWidgetLeaves.formDesc01")}
              className="application_search"
              value={`${userdata?.bio?.firstName} ${userdata?.bio?.lastName} `}
              onChange={(e) =>
                setNewLeave({
                  ...newLeave,
                  name: e.target.value,
                })
              }
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form_search">
            <Typography variant="body2"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}>{t("dashboardWidgetLeaves.title06")}</Box></Typography>
            <input
              name="email"
              type="text"
              placeholder={t("dashboardWidgetLeaves.formDesc02")}
              className="email"
              value={userdata?.bio?.email}
              onChange={(e) =>
                setNewLeave({
                  ...newLeave,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form_search">
            <Typography variant="body2"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}>{t("dashboardWidgetLeaves.title07")}</Box></Typography>
            <input
              name="department"
              type="text"
              placeholder={t("dashboardWidgetLeaves.formDesc03")}
              className="application_search"
              value="department"
              // onSubmit={(e) =>
              //   setNewLeave({
              //     ...newLeave,
              //     department: e.target.value,
              //   })
              // }
            />
          </div>

          <div className="form_type">
            <Typography variant="body2"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}>{t("dashboardWidgetLeaves.title08")}</Box></Typography>
            <select
              onChange={(e) =>
                setNewLeave({
                  ...newLeave,
                  type: e.target.value,
                })
              }
            >
              <option value="">{t("dashboardWidgetLeaves.formSelect01")}</option>
              <option value="sick-leave">{t("dashboardWidgetLeaves.formSelect02")}</option>
              <option value="holiday">{t("dashboardWidgetLeaves.formSelect03")}</option>
              <option value="home-office">{t("dashboardWidgetLeaves.formSelect04")}</option>
            </select>
          </div>

          <div className="form_date">
            <Typography variant="body2"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}>{t("dashboardWidgetLeaves.title09")}</Box></Typography>

            <input
              type="date"
              onChange={(e) => {
                setNewLeave({
                  ...newLeave,
                  dateFrom: e.target.value,
                });
              }}
            />

            <Typography variant="body2"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}>{t("dashboardWidgetLeaves.title10")}</Box></Typography>

            <input
              type="date"
              onChange={(e) => {
                setNewLeave({
                  ...newLeave,
                  dateTo: e.target.value,
                });
              }}
            />
          </div>

          <div className="form_buttons">
            <div
              type="submit"
              class="btn_submit"
              onClick={() => {
                addLeave();
                setNewLeave("");
                window.location.reload();
              }}
            >
              {t("dashboardWidgetLeaves.button02")}
            </div>
            <div class="btn_cancel" onClick={handleShow}>
              <CloseIcon />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WidgetApplications;
