import React, { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

function WidgetHolidays({ userdata }) {
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

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <Box
      className="widget_holidays_mainbox"
      sx={{ boxShadow: "0", bgcolor: "background.widgets" }}
    >
      <div className="holidays_top_wrapper">
        <div className="square_bullet"></div>
        <Typography style={{ fontSize: "15px" }}>
          <Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>
            {t("dashboardWidgetHolidays.title01")}
          </Box>
        </Typography>
      </div>

      <div className="holidays_middle_wrapper">
        <Typography variant="caption">
          <Box sx={{ boxShadow: "0", bgcolor: "background.widgets" }}>
            {t("dashboardWidgetHolidays.title02")}
          </Box>
        </Typography>
        <Box
          className="horizontal_line"
          sx={{ boxShadow: "0", bgcolor: "background.widgetlines" }}
        ></Box>
      </div>

      <div className="holidays_bottomleft_wrapper">
        {leaves &&
          leaves
            .filter((item) => item.bio.email === userdata.bio?.email)
            .map((item) => <h2>{item.availableHolidays}</h2>)}
        <Typography variant="caption">
          <Box sx={{ boxShadow: "0", bgcolor: "background.widgets" }}>
            {t("dashboardWidgetHolidays.title03")}
          </Box>
        </Typography>
      </div>

      <div className="holidays_bottommiddle_wrapper">
        <Box
          className="vertical_line"
          sx={{ boxShadow: "0", bgcolor: "background.widgetlines" }}
        ></Box>
      </div>

      <div className="holidays_bottomright_wrapper">
        {leaves &&
          leaves
            .filter((item) => item.bio.email === userdata.bio?.email)
            .map((item) => <h2>{item.takenHolidays || "0"} </h2>)}
        <Typography variant="caption">
          <Box sx={{ boxShadow: "0", bgcolor: "background.widgets" }}>
            {t("dashboardWidgetHolidays.title04")}
          </Box>
        </Typography>
      </div>
    </Box>
  );
}
export default WidgetHolidays;
