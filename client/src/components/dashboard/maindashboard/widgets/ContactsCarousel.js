import React from "react";

// CAROUSEL IMPORTS
import Carousel from "react-elastic-carousel";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

function ContactCarousel() {

  // TRANSLATION
  const { t } = useTranslation();
  //  <Typography variant="caption"><Box sx={{ ml: 2, boxShadow: "0", bgcolor: "transparent" }}>{t("dashboardWidgetSickleave.title02")}</Box></Typography>

  return (
    <div className="contact_carousel_mainbox">
      <Carousel itemsToShow={3}>
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
  );
}

export default ContactCarousel;
