import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { FormGroup, FormControl, InputLabel, Input } from "@material-ui/core";

const EmployeeInfo = ({ history, match }) => {
  const [empInfo, setEmpInfo] = useState();

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
        setEmpInfo(data.data);
      })
      .catch((err) => console.log(err));
  };

  // const edit = () => {
  //   const data = new FormData();
  //   data.append("file", file);
  //   const readyTOSend = JSON.stringify(empInfo);
  //   data.append("empInfo", readyTOSend);

  //   console.log(empInfo);
  //   axios
  //     .put("http://localhost:5000/employee/update", data, {
  //       header: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       history.push("/dashboard/employeedata/");
  //     })
  //     .catch((err) => console.log(err));
  // };
  // // autofill
  // const [firstName, setFirstName] = useState(empInfo.bio.firstName);
  // const [lastName, setLastName] = useState(empInfo.bio.lastName);
  // const [position, setPosition] = useState(empInfo.contractInfo.position);

  //styling of formControls
  const inputStylesA = {
    width: "46%",
    marginRight: "20px",
  };

  const inputStylesB = {
    width: "100%",
    marginRight: "20px",
  };

  const formStyles = {
    backgroundColor: "#ebebeb",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "20px",
  };

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      {/* personal edit data */}

      <div className="employeeinfo_wrapper">
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
        <div className="employeeinfo_header">
          <h1> Employee Info </h1>
        </div>
        <div className="employeeinfo_subheader">
          <div className="active_tab">
            <h4>General Data</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(`/dashboard/employeedata/hrinfo/${empInfo._id}`);
            }}
          >
            HR Information
          </div>
          <div className="inactive_tab">
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
        <div className="employeedata_form">
          <FormGroup>
            <div className="form_header">
              <div className="form_header_photo">
                <div className="photo">
                  <div className="dummy_photo">
                    <img
                      src={`http://localhost:5000/${empInfo?.bio?.photo}`}
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src =
                          "http://localhost:5000/uploads/error.jpg";
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form_header_info">
                <div className="fullname">
                  <h1>First</h1>
                  <h1>Last</h1>
                </div>

                <div className="position">
                  <h3>Position</h3>
                </div>

                <div className="contacts">
                  <MailOutlineIcon fontSize="small" />
                  <input
                    name="email"
                    value={empInfo?.bio?.email}
                    placeholder="Email"
                  />

                  <PhoneIcon fontSize="small" />
                  <input
                    name="phoneNumber"
                    value={empInfo?.bio?.phoneNumber}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="form_generaldata">
              <div className="basicdetails_header">
                <h3>BASIC DETAILS </h3>
              </div>

              <div className="basicdetails_content">
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">First Name</InputLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={empInfo?.bio?.firstName}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={empInfo?.bio?.lastName}
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Employee ID</InputLabel>
                  <Input
                    type="text"
                    name="employeeID"
                    value={empInfo?.bio?.employeeId}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Position</InputLabel>
                  <Input
                    type="text"
                    name="position"
                    value={empInfo?.contractInfo?.position}
                  />
                </FormControl>
              </div>

              <div className="personaldetails_header">
                <h3>PERSONAL DETAILS </h3>
              </div>

              <FormGroup style={formStyles}>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Address 1</InputLabel>
                  <Input
                    type="text"
                    name="streetOne"
                    value={empInfo?.addressOne?.streetOne}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Address 2</InputLabel>
                  <Input
                    type="text"
                    name="streetTwo"
                    value={
                      empInfo?.addressTwo?.streetTwo
                        ? empInfo?.addressTwo?.streetTwo
                        : "None"
                    }
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">City</InputLabel>
                  <Input
                    type="text"
                    name="cityOne"
                    value={empInfo?.addressOne?.cityOne}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Country</InputLabel>
                  <Input
                    type="text"
                    name="countryOne"
                    value={empInfo?.addressOne?.countryOne}
                    disabled
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">State / Region</InputLabel>
                  <Input
                    type="text"
                    name="stateOne"
                    value={empInfo?.addressOne?.stateOne}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                  <Input
                    type="text"
                    name="postalCodeOne"
                    value={empInfo?.addressOne?.postalCodeOne}
                    disabled
                  />
                </FormControl>
              </FormGroup>

              <FormGroup style={formStyles}>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
                  <Input
                    type="text"
                    name="dateOfBirth"
                    value={empInfo?.bio?.dateOfBirth}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Other Email</InputLabel>
                  <Input
                    type="text"
                    name="otherEmail"
                    value={empInfo?.bio?.otherEmail}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Nationality</InputLabel>
                  <Input
                    type="text"
                    name="nationality"
                    value={empInfo?.bio?.nationality}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Gender</InputLabel>
                  <Input
                    type="text"
                    name="nationality"
                    value={empInfo?.bio?.gender}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Marital Status</InputLabel>
                  <Input
                    type="text"
                    name="nationality"
                    value={empInfo?.bio?.maritalStatus}
                    disabled
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Hobbies</InputLabel>
                  <Input
                    type="text"
                    name="hobbies"
                    value={empInfo?.bio?.hobbies ? empInfo.bio.hobbies : "None"}
                    disabled
                  />
                </FormControl>
              </FormGroup>
            </div>

            <div className="next-btn">
              <button
                onClick={() => {
                  history.push(`/dashboard/employeedata/hrinfo/${empInfo._id}`);
                }}
              >
                Next{" "}
              </button>
            </div>
          </FormGroup>
        </div>
        ;
      </div>
    </div>
  );
};

export default EmployeeInfo;
