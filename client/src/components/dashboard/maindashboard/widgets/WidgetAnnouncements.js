import React, { useState, useEffect } from "react";
import axios from "axios";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Carousel from "react-elastic-carousel";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

// ICON IMPORTS
import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function WidgetAnnouncements() {
  // getting all data
  const [announcements, setAnnouncements] = useState();
  useEffect(() => {
    getAllAnnouncements();
  }, []);

  const getAllAnnouncements = () => {
    axios
      .get(
        "http://localhost:5000/announcements/announcements",

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((data) => {
        console.log(data.data);
        setAnnouncements(data.data);
      })
      .catch((err) => console.log(err));
  };

  //delete announcement
  const deleteAnnouncement = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/announcements/${id}`, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        data.data.success && getAllAnnouncements();
      })
      .catch((err) => console.log(err));
  };

  //show announcements on click mobile
  const [mobileAnnouncements, setMobileAnnouncements] = useState(false);
  const showMobileAnnouncements = () => {
    setMobileAnnouncements(!mobileAnnouncements);
  };

  //expanding announcements
  const [expand, setExpand] = useState(false);
  const [id, setId] = useState();
  const handleClick = (id) => {
    setExpand(!expand);
    setId(id);
  };

  //extracting month and date from data
  const showMonths = (stringDate) => {
    const date = new Date(stringDate);
    const month = date.getMonth();
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

    return months[month];
  };

  const showDay = (stringDate) => {
    const date = new Date(stringDate);
    const day = ("0" + date.getDate()).slice(-2);
    return day;
  };

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div
      className={
        mobileAnnouncements
          ? "widget_announcements_mainbox_hide"
          : "widget_announcements_mainbox_show"
      }
    >
      <div className="widget_announcements_header">
        <Typography variant="h6"><Box sx={{ boxShadow: "0", bgcolor: "transparent", color: "#fff" }}>{t("dashboardWidgetAnnouncements.title01")}</Box></Typography>

      </div>

      <div
        className="widget_announcements_sidedrawer"
        onClick={showMobileAnnouncements}
      >
        <div className={mobileAnnouncements ? "side-open" : "side-close"}>
          <i>
            <ArrowLeftIcon />
          </i>
        </div>
      </div>
      <div className="widget_announcements_display">
        <Carousel itemsToShow={1}>
          {announcements &&
            announcements.map((announcement) => (
              <div className="widget_announcement" key={announcement._id}>
                <div className="widget_announcement_dateposted">
                  <h4>{showMonths(announcement.date)}</h4>
                  <h3>{showDay(announcement.date)}</h3>
                  <hr />
                </div>

                <div className="widget_announcement_info">
                  <div className="widget_announcement_header">
                    <h3>{announcement.title}</h3>
                    <h4> {announcement.subtopic}</h4>
                    <div className="widget_announcements_icons">
                      <p onClick={() => handleClick(announcement._id)}>
                        {" "}
                        {t("dashboardWidgetAnnouncements.title02")}
                      </p>
                      <p onClick={() => deleteAnnouncement(announcement._id)}>
                        {t("dashboardWidgetAnnouncements.title03")}
                      </p>
                    </div>
                  </div>
                </div>

                {expand && announcement._id === id && (
                  <div className="expand_main_container_show">
                    <form class="expand_container">
                      <div className="expand_header">
                        <h1>{announcement.title}</h1>
                        <div className="expand_subheader">
                          <p>{t("misc.by")} {announcement.poster}</p>

                          <p>{t("misc.date")} {announcement.date}</p>

                          <p>{t("misc.time")} {announcement.time}</p>
                        </div>
                      </div>

                      <div className="expand_subtopic">
                        <p>{announcement.subtopic}</p>
                      </div>

                      <div className="expand_main_content">
                        <h3>Content</h3>
                        <p>{announcement.message}</p>
                        <h4> - {t("misc.end")} - </h4>
                      </div>

                      <div className="expand_buttons">
                        <button
                          type="button"
                          class="btn_cancel"
                          onClick={handleClick}
                        >
                          X
                        </button>
                        <i>
                          <BookmarkIcon style={{ fontSize: 80 }} />
                        </i>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ))}
        </Carousel>
      </div>

      <div
        className={
          mobileAnnouncements
            ? "widget_announcements_mobile_hide"
            : "widget_announcements_mobile_show"
        }
      >
        {announcements &&
          announcements.map((announcement) => (
            <div className="widget_announcement" key={announcement._id}>
              <div className="widget_announcement_dateposted">
                <h4>{showMonths(announcement.date)}</h4>
                <h3>{showDay(announcement.date)}</h3>
                <hr />
              </div>

              <div className="widget_announcement_info">
                <div className="widget_announcement_header">
                  <h3>{announcement.title}</h3>
                  <h4> {announcement.subtopic}</h4>
                </div>
                <div className="widget_announcements_icons">
                  <p onClick={() => handleClick(announcement._id)}>
                    {" "}
                    {t("dashboardWidgetAnnouncements.title02")}
                  </p>
                  <p onClick={() => deleteAnnouncement(announcement._id)}>
                    {t("dashboardWidgetAnnouncements.title03")}
                  </p>
                </div>
                <div className="widget_announcements_divider_mobile">
                  <div className="line"></div>
                </div>
              </div>

              {expand && announcement._id === id && (
                <div className="expand_main_container_show">
                  <form class="expand_container">
                    <div className="expand_header">
                      <h1>{announcement.title}</h1>
                      <div className="expand_subheader">
                        <p>{t("misc.by")} {announcement.poster}</p>

                        <p>{t("misc.date")} {announcement.date}</p>

                        <p>{t("misc.time")} {announcement.time}</p>
                      </div>
                    </div>

                    <div className="expand_subtopic">
                      <p>{announcement.subtopic}</p>
                    </div>

                    <div className="expand_main_content">
                      <h3>Content</h3>
                      <p>{announcement.message}</p>
                      <h4> - {t("misc.end")} - </h4>
                    </div>

                    <div className="expand_buttons">
                      <div class="btn_cancel" onClick={handleClick}>
                        X
                      </div>
                      <i>
                        <BookmarkIcon style={{ fontSize: 80 }} />
                      </i>
                    </div>
                  </form>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
export default WidgetAnnouncements;
