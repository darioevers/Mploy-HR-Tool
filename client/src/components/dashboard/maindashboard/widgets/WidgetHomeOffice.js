import React, { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

function WidgetHomeOffice({ userdata }) {
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
    <div className="widget_homeoffice_mainbox">
      <div className="homeoffice_top_wrapper">
        <div className="square_bullet"></div>
        <Typography variant="h7">
          <Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>
            {t("dashboardWidgetHomeOffice.title01")}
          </Box>
        </Typography>
      </div>

      <div className="homeoffice_middle_wrapper">
        <Typography variant="caption">
          <Box sx={{ boxShadow: "0", bgcolor: "transparent" }}>
            {t("dashboardWidgetHomeOffice.title02")}
          </Box>
        </Typography>
        <div className="horizontal_line"></div>
      </div>

      <div className="homeoffice_bottomleft_wrapper">
        {leaves &&
          leaves
            .filter((item) => item.bio.email === userdata.bio?.email)
            .map((item) => <h2>{item.availableHomeOffice}</h2>)}
        <Typography variant="caption">
          <Box sx={{ boxShadow: "0", bgcolor: "transparent" }}>
            {t("dashboardWidgetHomeOffice.title03")}
          </Box>
        </Typography>
      </div>

      <div className="homeoffice_bottommiddle_wrapper">
        <div className="vertical_line"></div>
      </div>

      <div className="homeoffice_bottomright_wrapper">
        {leaves &&
          leaves
            .filter((item) => item.bio.email === userdata.bio?.email)
            .map((item) => <h2>{item.takenHomeOffice || "0"} </h2>)}
        <Typography variant="caption">
          <Box sx={{ boxShadow: "0", bgcolor: "transparent" }}>
            {t("dashboardWidgetHomeOffice.title04")}
          </Box>
        </Typography>
      </div>
    </div>
  );
}
export default WidgetHomeOffice;
