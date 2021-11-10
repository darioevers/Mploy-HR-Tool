import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
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
                  <h4>JUN</h4>
                  <h3>06</h3>
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
                  <p> | </p>
                  <p>Date Posted: {announcement.date}</p>
                  <p> | </p>
                  <p>Time Posted: {announcement.time}</p>
                </div>
              </div>

              <div className="expand_subtopic">
                <p>{announcement.subtopic}</p>
              </div>

              <div className="expand_main_content">
                <h3>Content</h3>
                <p>{announcement.message}</p>
              </div>

              <div className="expand_buttons">
                <button type="button" class="btn_cancel" onClick={handleClick}>
                  X
                </button>
              </div>
            </form>
          </div>
        ))}
    </div>
  );
}
export default WidgetAnnouncements;
