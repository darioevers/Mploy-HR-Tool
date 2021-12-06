import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FormGroup } from "@material-ui/core";

const HrInfo = ({ history, match }) => {
  const [hrData, setHrData] = useState();

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
    axios
      .get(
        `http://localhost:5000/employee/singleEmployee/${match.params.id}`,

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((data) => {
        console.log(data.data);
        setHrData(data.data);
      })
      .catch((err) => console.log(err));
  };

  const formStylesB = {
    backgroundColor: "#ebebeb",
    borderRadius: "20px",
    paddingTop: "20px",
  };

  return (
    <div className="hrinfo_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="hrinfo_wrapper">
        <NavLink
          exact
          to="/dashboard/employeedata/"
          activeClassName="active"
          className="sidenav_link"
        >
          <div className="back-arrow">
            <i>
              <ArrowBackIcon />
            </i>
            <p> Back</p>
          </div>
        </NavLink>
        <div className="hrinfo_header">
          <h1> Employee Info </h1>
        </div>

        <div className="hrinfo_subheader">
          <div
            className="hrinfo_inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/employeeinfo/${hrData?._id}`
              );
            }}
          >
            <h4>General Data</h4>
          </div>
          <div className="hrinfo_active_tab">
            <h4>HR Information</h4>
          </div>
          <div
            className="hrinfo_inactive_tab"
            onClick={() => {
              history.push(`/dashboard/employeedata/documents/${hrData?._id}`);
            }}
          >
            <h4>Documents</h4>
          </div>
        </div>

        <div className="hrinfo_form_generaldata">
          <div className="hrinfo_contractdetails_header">
            <h3>CONTRACT DETAILS </h3>
          </div>

          <div className="hrinfo_contractdetails_content">
            <div className="hrinfo_contractdetails_left">
              <FormGroup style={formStylesB}>
                <div className="input-box">
                  <p>Contract No.</p>
                  <input type="text" value={hrData?.contractInfo?.contractNo} />
                </div>
                <div className="input-box">
                  <p>Hire Date</p>
                  <input type="text" value={hrData?.contractInfo?.hireDate} />
                </div>
                <div className="input-box">
                  <p>Contract End</p>
                  <input
                    type="text"
                    value={hrData?.contractInfo?.contractEnd}
                  />
                </div>
                <div className="input-box">
                  <p>Probation Period</p>
                  <input
                    type="text"
                    value={hrData?.contractInfo?.probationPeriod}
                  />
                </div>
                <div className="input-box">
                  <p>Contract No.</p>
                  <input
                    type="text"
                    value={hrData?.contractInfo?.employmentType}
                  />
                </div>
                <div className="input-box">
                  <p>Contract No.</p>
                  <input type="text" value={hrData?.contractInfo?.team} />
                </div>
              </FormGroup>
            </div>
            <div className="hrinfo_contractdetails_right">
              <FormGroup>
                <div className="input-box">
                  <p>Department</p>
                  <input type="text" value={hrData?.contractInfo?.department} />
                </div>

                <div className="input-box">
                  <p>Supervisor</p>
                  <input type="text" value={hrData?.contractInfo?.supervisor} />
                </div>
                <div className="input-box">
                  <p>Salary</p>
                  <input type="text" value={hrData?.contractInfo?.salary} />
                </div>
                <div className="input-box">
                  <p>Overtime</p>
                  <input type="text" value={hrData?.contractInfo?.overtime} />
                </div>
                <div className="input-box">
                  <p>Work Location</p>
                  <input
                    type="text"
                    value={hrData?.contractInfo?.workLocation}
                  />
                </div>
              </FormGroup>
            </div>
          </div>

          <div className="hrinfo_education_header">
            <h3>EDUCATION HISTORY</h3>
          </div>

          <div className="hrinfo_education_content">
            <div className="hrinfo_education_info">
              <h3>{hrData?.education?.school}</h3>
              <h4>
                {hrData?.education?.degree} -{" "}
                {hrData?.education?.specialization}
              </h4>
            </div>
            <div className="hrinfo_education_year">
              <h2> {hrData?.education?.endDate} </h2>
              <h4>Year of Completion</h4>
            </div>
          </div>

          <div className="hrinfo_workexperience_header">
            <h3>WORK EXPERIENCE</h3>
          </div>

          <div className="hrinfo_workexperience_content">
            <div className="hrinfo_workexperience_info">
              <h3>XYZ Company</h3>
              <h4>Project Manager</h4>
            </div>
            <div className="hrinfo_workexperience_year">
              <h3> 2009 - 2017 </h3>
              <h5>Periods in Year</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrInfo;
