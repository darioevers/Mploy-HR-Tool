import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FormGroup, FormControl, InputLabel, Input } from "@material-ui/core";

const HrInfo = ({ location, history, match }) => {
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

  //styling of formControls
  // const inputStylesA = {
  //   width: "100%",
  //   marginRight: "20px",
  //   fontSize: "14px",
  // };

  // const inputStylesB = {
  //   width: "50%",
  //   fontSize: "12px",
  // };

  // const formStylesA = {
  //   backgroundColor: "#ebebeb",
  //   marginTop: "20px",
  //   padding: "15px",
  //   borderRadius: "20px",
  // };

  const formStylesB = {
    backgroundColor: "#ebebeb",
    borderRadius: "20px",
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
          <div className="hrinfo_inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/employeeinfo/employeedocuments"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              <h4> Documents </h4>
            </NavLink>
          </div>
        </div>

        <div className="hrinfo_form_generaldata">
          <div className="hrinfo_contractdetails_header">
            <h3>CONTRACT DETAILS </h3>
          </div>

          <div className="hrinfo_contractdetails_content">
            <div className="hrinfo_contractdetails_left">
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="my-input">Contract No</InputLabel>

                  <Input value={hrData?.contractInfo?.contractNo} disabled />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Hire Date</InputLabel>

                  <Input value={hrData?.contractInfo?.hireDate} disabled />
                  {/* <Input
                  // value={hrData.contractInfo.contractNo}
                  autoFocus
                  type="date"
                /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Contract End</InputLabel>
                  <Input value={hrData?.contractInfo?.contractEnd} disabled />
                  {/* <Input
                  // value={hrData.contractInfo.contractNo}
                  type="date"
                  min="2019-01-01"
                /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Probation Period</InputLabel>
                  <Input
                    value={hrData?.contractInfo?.probationPeriod}
                    disabled
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Employment Type</InputLabel>
                  <Input
                    value={hrData?.contractInfo?.employmentType}
                    disabled
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Team</InputLabel>
                  <Input value={hrData?.contractInfo?.team} disabled />
                </FormControl>
              </FormGroup>
            </div>
            <div className="hrinfo_contractdetails_right">
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="my-input">Department</InputLabel>
                  <Input value={hrData?.contractInfo?.department} disabled />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="my-input">Supervisor</InputLabel>
                  <Input value={hrData?.contractInfo?.supervisor} disabled />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Salary</InputLabel>
                  <Input value={hrData?.contractInfo?.salary} disabled />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Overtime</InputLabel>
                  <Input value={hrData?.contractInfo?.overtime} disabled />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Work Location</InputLabel>
                  <Input value={hrData?.contractInfo?.workLocation} disabled />
                </FormControl>
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
