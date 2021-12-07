import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import consolaGlobalInstance from "consola";
import e from "cors";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

// ICON IMPORTS
import CloseIcon from "@mui/icons-material/Close";

function WidgetApplications({ userdata }) {
  //fetch leaves data
  const [leaves, setLeaves] = useState();
  const [newLeave, setNewLeave] = useState();

  const history = useHistory();
  // if there is nothing in the local storage we immediatly

  useEffect(() => {
    // getOneEmployee();
    fetchPrivateData();
    getAllLeaves();
  }, [history]);

  const fetchPrivateData = async () => {
    if (!localStorage.getItem("authToken")) {
      history.push("/");
    }
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    try {
      const { data } = await axios.get(
        "http://localhost:5000/dashboard",
        config
      );
      console.log(data);
      setNewLeave({
        email: data.user.bio.email,
        name: data.user.bio.firstName,
        department: data.user.contractInfo.department,
      });
    } catch (error) {
      console.log(error);
      localStorage.removeItem("authToken");
    }
  };

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

  console.log(userdata);
  console.log(newLeave);

  const addLeave = () => {
    const data = newLeave;
    console.log(data);

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
    <Box className="widget_applications_mainbox" sx={{ boxShadow: "0", bgcolor: 'background.widgets' }}>
      <div className="widget_applications_header">
        <Typography variant="h6">
          <Box sx={{ ml: 3, mt: 2, boxShadow: "0", bgcolor: "background.widgets" }}>
            {t("dashboardWidgetLeaves.title01")}
          </Box>
        </Typography>
      </div>
      <div className="widget_applications_body">
        <div className="widget_applications_pending">
          <h1>
            {leaves && leaves.filter((item) => item.pending === true).length}
          </h1>
          <Typography variant="caption">
            <Box sx={{ boxShadow: "0", bgcolor: "background.widgets" }}>
              {t("dashboardWidgetLeaves.title02")}
            </Box>
          </Typography>
        </div>
        <div className="widget_applications_approved">
          <h1>
            {leaves && leaves.filter((item) => item.pending === false).length}
          </h1>
          <Typography variant="caption">
            <Box sx={{ boxShadow: "0", bgcolor: "background.widgets" }}>
              {t("dashboardWidgetLeaves.title03")}
            </Box>
          </Typography>
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
          <Typography variant="h6">
            <Box
              sx={{
                boxShadow: "0",
                bgcolor: "transparent",
                color: "#fff",
                textAlign: "center",
              }}
            >
              {t("dashboardWidgetLeaves.title04")}
            </Box>
          </Typography>

          <br />

          <div className="form_search">
            <Typography variant="body2">
              <Box
                sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}
              >
                {t("dashboardWidgetLeaves.title05")}
              </Box>
            </Typography>

            <input
              type="text"
              name="name"
              placeholder={t("dashboardWidgetLeaves.formDesc01")}
              className="application_search"
              value={newLeave?.name}

            // onChange={(e) =>
            //   setNewLeave({
            //     ...newLeave,
            //     name: e.target.value,
            //   })
            // }
            />
          </div>

          {/* EMAIL */}
          <div className="form_search">
            <Typography variant="body2">
              <Box
                sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}
              >
                {t("dashboardWidgetLeaves.title06")}
              </Box>
            </Typography>
            <input
              name="email"
              value={newLeave?.email}
              type="text"
              placeholder={t("dashboardWidgetLeaves.formDesc02")}
              className="email"
              readOnly
            // onChange={(e) =>
            //   setNewLeave({
            //     ...newLeave,
            //     email: e.target.value,
            //   })
            // }
            />
          </div>

          <div className="form_search">
            <Typography variant="body2">
              <Box
                sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}
              >
                {t("dashboardWidgetLeaves.title07")}
              </Box>
            </Typography>
            <input
              name="department"
              type="text"
              placeholder={t("dashboardWidgetLeaves.formDesc03")}
              className="application_search"
              value={newLeave?.department}
            // onChange={(e) =>
            //   setNewLeave({
            //     ...newLeave,
            //     department: e.target.value,
            //   })
            // }
            />
          </div>

          <div className="form_type">
            <Typography variant="body2">
              <Box
                sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}
              >
                {t("dashboardWidgetLeaves.title08")}
              </Box>
            </Typography>
            <select
              onChange={(e) =>
                setNewLeave({
                  ...newLeave,
                  type: e.target.value,
                })
              }
            >
              <option value="">
                {t("dashboardWidgetLeaves.formSelect01")}
              </option>
              <option value="sick-leave">
                {t("dashboardWidgetLeaves.formSelect02")}
              </option>
              <option value="holiday">
                {t("dashboardWidgetLeaves.formSelect03")}
              </option>
              <option value="home-office">
                {t("dashboardWidgetLeaves.formSelect04")}
              </option>
            </select>
          </div>

          <div className="form_date">
            <Typography variant="body2">
              <Box
                sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}
              >
                {t("dashboardWidgetLeaves.title09")}
              </Box>
            </Typography>

            <input
              type="date"
              onChange={(e) => {
                setNewLeave({
                  ...newLeave,
                  dateFrom: e.target.value,
                });
              }}
            />

            <Typography variant="body2">
              <Box
                sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}
              >
                {t("dashboardWidgetLeaves.title10")}
              </Box>
            </Typography>

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
    </Box>
  );
}

export default WidgetApplications;
