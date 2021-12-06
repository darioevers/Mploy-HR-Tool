import React, { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

function WidgetSickLeave({ userdata }) {
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
    <div className="widget_sickleave_mainbox">
      <div className="sickleave_top_wrapper">
        <div className="square_bullet"></div>
        <Typography variant="h6"><Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetSickleave.title01")}</Box></Typography>
      </div>

      <div className="sickleave_middle_wrapper">
        <Typography variant="caption"><Box sx={{ boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetSickleave.title02")}</Box></Typography>
        <div className="horizontal_line"></div>
      </div>

      <div className="sickleave_bottomleft_wrapper">
        <Typography variant="body2"><Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetSickleave.title03")}</Box></Typography>
        <Typography variant="caption"><Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetSickleave.title04")}</Box></Typography>
      </div>
      <div className="sickleave_bottommiddle_wrapper">
        <div className="vertical_line"></div>
      </div>
      <div className="sickleave_bottomright_wrapper">
        <h2>
          {leaves &&
            leaves
              .filter((item) => item.bio.email === userdata.bio?.email)
              .map((item) => <h2>{item.takenSickLeave || "0"}</h2>)}
        </h2>
        <Typography variant="caption"><Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetSickleave.title05")}</Box></Typography>
      </div>
    </div>
  );
}
export default WidgetSickLeave;
