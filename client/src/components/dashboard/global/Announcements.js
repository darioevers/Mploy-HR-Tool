import React, { useState } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

function Announcements() {
  const [announcement, setAnnouncement] = useState({});

  const addNewAnnouncement = () => {
    const data = announcement;
    axios
      .post(
        "http://localhost:5000/announcements/addannouncement",
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

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="announcements_mainbox">
      <div className="announcements_date_container">
        <div className="announcements_date">
          <Typography variant="h6">
            <Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 16 }}>
              {t("dashboardRightDrawer.formDesc02")}
            </Box>
          </Typography>

          <input
            type="date"
            onChange={(e) =>
              setAnnouncement({ ...announcement, date: e.target.value })
            }
          ></input>
        </div>
        <div className="announcements_date">
          <Typography variant="h6">
            <Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 16 }}>
              {t("dashboardRightDrawer.formDesc03")}
            </Box>
          </Typography>

          <input
            type="time"
            onChange={(e) =>
              setAnnouncement({ ...announcement, time: e.target.value })
            }
          ></input>
        </div>
      </div>

      <div className="announcements_title">
        <Typography variant="h6">
          <Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 16 }}>
            {t("dashboardRightDrawer.formDesc04")}
          </Box>
        </Typography>

        <input
          type="text"
          placeholder={t("dashboardRightDrawer.formDesc05")}
          name="title"
          onChange={(e) =>
            setAnnouncement({ ...announcement, title: e.target.value })
          }
        ></input>
      </div>

      <div className="announcements_subtopic">
        <Typography variant="h6">
          <Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 16 }}>
            {t("dashboardRightDrawer.formDesc06")}
          </Box>
        </Typography>

        <input
          type="text"
          placeholder={t("dashboardRightDrawer.formDesc07")}
          name="subtopic"
          onChange={(e) =>
            setAnnouncement({ ...announcement, subtopic: e.target.value })
          }
        ></input>
      </div>

      <div className="announcements_message">
        <Typography variant="h6">
          <Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 16 }}>
            {t("dashboardRightDrawer.formDesc08")}
          </Box>
        </Typography>

        <textarea
          placeholder={t("dashboardRightDrawer.formDesc09")}
          name="message"
          onChange={(e) =>
            setAnnouncement({ ...announcement, message: e.target.value })
          }
        ></textarea>
      </div>

      <div className="announcements_poster">
        <Typography variant="h6">
          <Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 16 }}>
            {t("dashboardRightDrawer.formDesc10")}
          </Box>
        </Typography>

        <input
          type="text"
          name="poster"
          onChange={(e) =>
            setAnnouncement({ ...announcement, poster: e.target.value })
          }
        ></input>
      </div>

      <div className="announcements_post">
        <button
          onClick={() => {
            addNewAnnouncement();
            setAnnouncement("");
            window.location.reload();
          }}
        >
          <Typography variant="h6">
            <Box sx={{ boxShadow: "0", bgcolor: "transparent", fontSize: 16 }}>
              {t("dashboardRightDrawer.formButton02")}
            </Box>
          </Typography>
        </button>
      </div>
    </div>
  );
}

export default Announcements;
