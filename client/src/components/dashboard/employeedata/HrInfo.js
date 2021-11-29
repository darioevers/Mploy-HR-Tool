import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FormGroup, FormControl, InputLabel, Input } from "@material-ui/core";

const HrInfo = ({ location, history }) => {
  const [hrData, setHrData] = useState(
    location.state && location.state.empInfo
  );
  const [file, setFile] = useState();

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
          <div className="inactive_tab_hr">
            <NavLink
              exact
              to="/dashboard/employeedata/employeeinfo"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              General Data
            </NavLink>
          </div>
          <div className="active_tab_hr">
            <h4>HR Information</h4>
          </div>
          <div className="inactive_tab_hr">
            <NavLink
              exact
              to="/dashboard/employeedata/employeeinfo/employeedocuments"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              Documents
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

                  <Input injectFirst />
                  {/* <Input value={hrData.bio?.firstName} /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Hire Date</InputLabel>

                  <Input />
                  {/* <Input
                  // value={hrData.contractInfo.contractNo}
                  autoFocus
                  type="date"
                /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Contract End</InputLabel>
                  <Input />
                  {/* <Input
                  // value={hrData.contractInfo.contractNo}
                  type="date"
                  min="2019-01-01"
                /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Probation Period</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Employment Type</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Team</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>
              </FormGroup>
            </div>
            <div className="hrinfo_contractdetails_right">
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="my-input">Department</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="my-input">Supervisor</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Salary</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Overtime</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Work Location</InputLabel>
                  <Input />
                  {/* <Input value={hrData.contractInfo.contractNo} /> */}
                </FormControl>
              </FormGroup>
            </div>
          </div>

          <div className="hrinfo_education_header">
            <h3>EDUCATION HISTORY</h3>
          </div>

          <div className="hrinfo_education_content">
            <div className="hrinfo_education_info">
              <h3>South Hampton Institute</h3>
              <h4>Bachelors - HR Management</h4>
            </div>
            <div className="hrinfo_education_year">
              <h2> 2009 </h2>
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
