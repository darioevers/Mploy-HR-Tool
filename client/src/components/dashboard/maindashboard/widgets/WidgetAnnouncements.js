import React, { useState, useEffect } from "react";
import axios from "axios";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Carousel from "react-elastic-carousel";

function WidgetAnnouncements() {
  const [announcements, setAnnouncements] = useState();
  useEffect(() => {
    getAllAnnouncements();
  }, []);

  // fetch data from backend
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

  //expanding announcements
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(!expand);
  };

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
  return (
    <div className="widget_announcements_mainbox">
      <div className="widget_announcements_header">
        <h1>ANNOUNCEMENTS</h1>
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
                  </div>
                  <div className="widget_announcements_icons">
                    <p onClick={handleClick}> Read More Here &gt;&gt;</p>
                    <p onClick={() => deleteAnnouncement(announcement._id)}>
                      Delete
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>

      {announcements &&
        announcements.map((announcement) => (
          <div
            className={
              expand
                ? "expand_main_container_show"
                : "expand_main_container_hide"
            }
          >
            <form class="expand_container">
              <div className="expand_header">
                <h1>{announcement.title}</h1>
                <div className="expand_subheader">
                  <p>by {announcement.poster}</p>

                  <p>Date Posted: {announcement.date}</p>

                  <p>Time Posted: {announcement.time}</p>
                </div>
              </div>

              <div className="expand_subtopic">
                <p>{announcement.subtopic}</p>
              </div>

              <div className="expand_main_content">
                <h3>Content</h3>
                <p>{announcement.message}</p>
                <h4> - END - </h4>
              </div>

              <div className="expand_buttons">
                <button type="button" class="btn_cancel" onClick={handleClick}>
                  X
                </button>
                <i>
                  <BookmarkIcon style={{ fontSize: 80 }} />
                </i>
              </div>
            </form>
          </div>
        ))}
    </div>
  );
}
export default WidgetAnnouncements;
