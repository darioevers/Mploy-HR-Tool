import React from "react";
import Carousel from "react-elastic-carousel";

function WidgetBirthdays() {
  return (
    <div className="widget_birthdays_mainbox">
      <div className="birthdays_header">
        <h1>BIRTHDAYS</h1>
      </div>

      <div className="birthdays_today">
        <Carousel itemsToShow={2}>
          <div className="contact_one">
            <div className="contact_one_image"></div>
            <div className="contact_one_name">User 1 </div>
          </div>

          <div className="contact_two">
            <div className="contact_two_image"></div>
            <div className="contact_two_name">User 2 </div>
          </div>

          <div className="contact_three">
            <div className="contact_three_image"></div>
            <div className="contact_three_name">User 3 </div>
          </div>

          <div className="contact_four">
            <div className="contact_four_image"></div>
            <div className="contact_four_name">User 4 </div>
          </div>

          <div className="contact_five">
            <div className="contact_five_image"></div>
            <div className="contact_five_name">User 5 </div>
          </div>
        </Carousel>
      </div>

      <div className="birthdays_month">
        <Carousel itemsToShow={2}>
          <div className="contact_one">
            <div className="contact_one_image"></div>
            <div className="contact_one_name">User 1 </div>
          </div>

          <div className="contact_two">
            <div className="contact_two_image"></div>
            <div className="contact_two_name">User 2 </div>
          </div>

          <div className="contact_three">
            <div className="contact_three_image"></div>
            <div className="contact_three_name">User 3 </div>
          </div>

          <div className="contact_four">
            <div className="contact_four_image"></div>
            <div className="contact_four_name">User 4 </div>
          </div>

          <div className="contact_five">
            <div className="contact_five_image"></div>
            <div className="contact_five_name">User 5 </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default WidgetBirthdays;
