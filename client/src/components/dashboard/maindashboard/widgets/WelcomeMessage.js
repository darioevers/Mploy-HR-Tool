import React from "react";

function WelcomeMessage({ userdata }) {
  return (
    <div className="welcome_message_mainbox">
      <h1>
        Hi{" "}
        <span className="employee_name">
          {userdata.bio?.firstName} {userdata.bio?.lastName}
        </span>
      </h1>
      <h4>
        Welcome back! Inspire the best work in people, enabling them to achieve
        their goals!
      </h4>
    </div>
  );
}
export default WelcomeMessage;
