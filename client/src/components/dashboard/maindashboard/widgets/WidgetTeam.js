import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InfoIcon from "@material-ui/icons/Info";
import ContactCarousel from "./ContactsCarousel";

function WidgetTeam() {
  return (
    <div className="widget_team_mainbox">
      {/* Team Header */}
      <div className="team_header_top">
        <h1>TEAM</h1>
        <div className="horizontal_line"></div>
      </div>

      {/* Manager Wrapper */}
      <div className="team_manager_wrapper">
        <div>
          <div className="team_manager_photo_wrapper">
            <div className="team_manager_photo"></div>
            <div className="team_manager_links">
              <div>
                <MailOutlineIcon
                  style={{ fontSize: "small", color: "black" }}
                />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "black" }} />
              </div>
            </div>
          </div>

          <div className="team_manager_title">
            <h4>Project Mngr.</h4>
          </div>
        </div>
      </div>

      {/* Supervisor */}
      <div className="team_supervisor_wrapper">
        <div>
          <div className="team_supervisor_photo_wrapper">
            <div className="team_supervisor_photo"></div>
            <div className="team_supervisor_links">
              <div>
                <MailOutlineIcon
                  style={{ fontSize: "small", color: "black" }}
                />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "black" }} />
              </div>
            </div>
          </div>

          <div className="team_supervisor_title">
            <h4>Supervisor</h4>
          </div>
        </div>
      </div>

      {/* IT Manager / Supervisor */}
      <div className="team_it_one_wrapper">
        <div>
          <div className="team_it_one_photo_wrapper">
            <div className="team_it_one_photo"></div>
            <div className="team_it_one_links">
              <div>
                <MailOutlineIcon
                  style={{ fontSize: "small", color: "black" }}
                />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "black" }} />
              </div>
            </div>
          </div>

          <div className="team_it_one_title">
            <h4>IT Manager</h4>
          </div>
        </div>
      </div>

      {/* IT Support */}
      <div className="team_it_two_wrapper">
        <div>
          <div className="team_it_two_photo_wrapper">
            <div className="team_it_two_photo"></div>
            <div className="team_it_two_links">
              <div>
                <MailOutlineIcon
                  style={{ fontSize: "small", color: "black" }}
                />
              </div>
              <div>
                <InfoIcon style={{ fontSize: "small", color: "black" }} />
              </div>
            </div>
          </div>

          <div className="team_it_two_title">
            <h4>IT Support</h4>
          </div>
        </div>
      </div>

      {/* Contacts Header */}
      <div className="team_header_bottom">
        <h1>CONTACTS</h1>
        <div className="horizontal_line"></div>
      </div>

      {/* Contacts Wrapper */}
      <div className="team_contacts_wrapper">
        <ContactCarousel />
      </div>
    </div>
  );
}
export default WidgetTeam;
