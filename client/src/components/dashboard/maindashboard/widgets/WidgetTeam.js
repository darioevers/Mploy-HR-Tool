import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InfoIcon from "@material-ui/icons/Info";

function WidgetTeam() {
  return (
    <div className="widget_team_mainbox">
      <div className="team_header_top">
        <h1>TEAM</h1>
        <div className="horizontal_line"></div>
      </div>

      <div className="team_manager_wrapper">
        <div>
          <div className="team_manager_photo">IMAGE</div>
          <div className="team_manager_title">
            <h4>Project Mngr.</h4>
          </div>
        </div>
        <div>
          <div>
            <MailOutlineIcon style={{ fontSize: "small", color: "blue" }} />
          </div>
          <div>
            <InfoIcon style={{ fontSize: "small", color: "blue" }} />
          </div>
        </div>
      </div>

      <div className="team_supervisor_wrapper">
        <div>
          <div className="team_supervisor_photo">IMAGE</div>
          <div className="team_supervisor_title">
            <h4>Supervisor</h4>
          </div>
        </div>
        <div>
          <div>
            <i>
              <MailOutlineIcon style={{ fontSize: "small", color: "blue" }} />
            </i>
          </div>
          <div>
            <i>
              <InfoIcon style={{ fontSize: "small", color: "blue" }} />
            </i>
          </div>
        </div>
      </div>

      <div className="team_it_one">
        <div>
          <div className="team_it_one_photo">IMAGE</div>
          <div className="team_it_one_title">
            <h4>IT Manager</h4>
          </div>
        </div>
        <div>
          <div>
            <i>
              <MailOutlineIcon style={{ fontSize: "small", color: "blue" }} />
            </i>
          </div>
          <div>
            <i>
              <InfoIcon style={{ fontSize: "small", color: "blue" }} />
            </i>
          </div>
        </div>
      </div>

      <div className="team_it_two">
        <div>
          <div className="team_it_two_photo">IMAGE</div>
          <div className="team_it_two_title">
            <h4>IT Support</h4>
          </div>
        </div>
        <div>
          <div>
            <i>
              <MailOutlineIcon style={{ fontSize: "small", color: "blue" }} />
            </i>
          </div>
          <div>
            <InfoIcon style={{ fontSize: "small", color: "red" }} />
          </div>
        </div>
      </div>

      <div className="team_header_bottom">
        <h1>CONTACTS</h1>
        <div className="horizontal_line"></div>
      </div>

      <div className="team_contacts_wrapper">
        <div>ARROW LEFT</div>
        <div>Image 1</div>
        <div>Image 2</div>
        <div>Image 3</div>
        <div>ARROW RIGHT</div>
      </div>
    </div>
  );
}
export default WidgetTeam;
