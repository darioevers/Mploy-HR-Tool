import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// MUI IMPORTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Paper";

function WidgetBirthdays({ userdata }) {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    getAllEmployee();
  }, []);

  // fetching all data from backend
  const getAllEmployee = () => {
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
        setEmployees(data.data);
      })
      .catch((err) => console.log(err));
  };
  //get todays date without year
  const today = () => {
    let date = new Date();
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0

    return mm + "-" + dd;
  };

  //get todays month

  const month = () => {
    let date = new Date();
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    return mm;
  };

  //remove year from birthday
  const birthday = (stringDate) => {
    let date = new Date(stringDate);
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");

    return mm + "-" + dd;
  };

  //get month from birthday
  const birthdayMonth = (stringDate) => {
    let date = new Date(stringDate);
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0

    return mm;
  };

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <Box className="widget_birthdays_mainbox" sx={{ boxShadow: "0", bgcolor: 'background.widgets' }}>
      <div className="widget_birthdays_header">
        <Typography variant="h6">
          <Box sx={{ ml: 3, mt: 2, boxShadow: "0", bgcolor: "transparent" }}>
            {t("dashboardWidgetBirthdays.title01")}
          </Box>
        </Typography>
      </div>
      <div className="birthdays_content_wrapper">
        <div className="birthdays_today">
          <Carousel itemsToShow={2}>
            {employees &&
              employees
                .filter(
                  (item) =>
                    birthday(item.bio.dateOfBirth) === today() &&
                    item.bio.email !== userdata.bio?.email
                )
                .map((employee) => (
                  <div className="birthday_today_wrapper" key={employee._id}>
                    <div className="birthday_today_image">
                      <img
                        src={`http://localhost:5000/${employee.bio.photo}`}
                        width="50"
                        onError={(e) => {
                          e.target.onError = null;
                          e.target.src =
                            "http://localhost:5000/uploads/error.jpg";
                        }}
                      />
                    </div>
                    <div className="birthday_today_name">
                      <p>{employee.bio.firstName}</p>
                    </div>
                  </div>
                ))}
          </Carousel>
          <Typography variant="caption">
            <Box
              sx={{ boxShadow: "0", bgcolor: "background.widgets", fontWeight: 400 }}
            >
              {t("dashboardWidgetBirthdays.title02")}
            </Box>
          </Typography>
        </div>

        <div className="birthdays_month">
          <Carousel itemsToShow={2}>
            {employees &&
              employees
                .filter(
                  (item) =>
                    birthday(item.bio.dateOfBirth) !== today() &&
                    birthdayMonth(item.bio.dateOfBirth) === month()
                )
                .map((employee) => (
                  <div className="birthday_month_wrapper" key={employee._id}>
                    <div className="birthday_month_image">
                      <img
                        src={`http://localhost:5000/${employee.bio.photo}`}
                        width="50"
                        onError={(e) => {
                          e.target.onError = null;
                          e.target.src =
                            "http://localhost:5000/uploads/error.jpg";
                        }}
                      />
                    </div>
                    <div className="birthday_month_name">
                      <p>{employee.bio.firstName}</p>
                    </div>
                  </div>
                ))}
          </Carousel>
          <Typography variant="caption">
            <Box
              sx={{ boxShadow: "0", bgcolor: "background.widgets", fontWeight: 400 }}
            >
              {t("dashboardWidgetBirthdays.title03")}
            </Box>
          </Typography>
        </div>
      </div>
    </Box>
  );
}
export default WidgetBirthdays;
