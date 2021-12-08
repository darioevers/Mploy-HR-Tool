import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/NewDashboardSideNav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FormGroup } from "@material-ui/core";

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
            <h4>HR Information</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(`/dashboard/employeedata/documents/${empInfo._id}`);
            }}
          >
            <h4>Documents</h4>
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
                  <h1>{empInfo?.bio?.firstName}</h1>
                  <h1>{empInfo?.bio?.lastName}</h1>
                </div>

                <div className="position">
                  <h3>{empInfo?.contractInfo?.position}</h3>
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
            <div className="employeeinfo_form_generaldata">
              <div className="personaldetails_header">
                <h3>PERSONAL DETAILS </h3>
              </div>

              <FormGroup style={formStyles}>
                <div className="input-box">
                  <p>Address One</p>
                  <input type="text" value={empInfo?.addressOne?.streetOne} />
                </div>

                <div className="input-box">
                  <p>Address Two</p>
                  <input
                    type="text"
                    value={
                      empInfo?.addressTwo?.streetTwo
                        ? empInfo?.addressTwo?.streetTwo
                        : "No Entry"
                    }
                  />
                </div>

                <div className="input-box">
                  <p>City</p>
                  <input type="text" value={empInfo?.addressOne?.cityOne} />
                </div>

                <div className="input-box">
                  <p>State</p>
                  <input type="text" value={empInfo?.addressOne?.stateOne} />
                </div>

                <div className="input-box">
                  <p>Country</p>
                  <input type="text" value={empInfo?.addressOne?.countryOne} />
                </div>

                <div className="input-box">
                  <p>Postal Code</p>
                  <input
                    type="text"
                    value={empInfo?.addressOne?.postalCodeOne}
                  />
                </div>
              </FormGroup>

              <FormGroup style={formStyles}>
                <div className="input-box">
                  <p>Date of Birth</p>
                  <input type="text" value={empInfo?.bio?.dateOfBirth} />
                </div>

                <div className="input-box">
                  <p>Other Email</p>
                  <input
                    type="text"
                    value={
                      empInfo?.bio?.otherEmail
                        ? empInfo?.bio?.otherEmail
                        : "No Entry"
                    }
                  />
                </div>

                <div className="input-box">
                  <p>Nationality</p>
                  <input type="text" value={empInfo?.bio?.nationality} />
                </div>

                <div className="input-box">
                  <p>Gender</p>
                  <input type="text" value={empInfo?.bio?.gender} />
                </div>

                <div className="input-box">
                  <p>Marital Status</p>
                  <input type="text" value={empInfo?.bio?.maritalStatus} />
                </div>

                <div className="input-box">
                  <p>Hobbies</p>
                  <input
                    type="text"
                    value={
                      empInfo?.bio?.hobbies ? empInfo.bio.hobbies : "No Entry"
                    }
                  />
                </div>
              </FormGroup>
            </div>
          </FormGroup>
        </div>
        ;
      </div>
    </div>
  );
};

export default EmployeeInfo;
