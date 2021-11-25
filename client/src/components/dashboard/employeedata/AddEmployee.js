import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
// import DatePicker from "@material-ui/lab/DatePicker";

const AddEmployee = ({ history }) => {
  const [employee, setEmployee] = useState({});
  const [file, setFile] = useState();

  //autofill
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [position, setPosition] = useState("Position");

  //styling of formControls
  const inputStylesA = {
    width: "46%",
    marginRight: "20px",
  };

  const inputStylesB = {
    width: "30%",
    marginRight: "20px",
  };

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="addemployee_wrapper">
        <h1> Add New Employee </h1>
        <div className="addemployee_header">
          <div className="active_tab">
            <h4>General Data</h4>
          </div>
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/addemployee/hrinfo"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              HR Information
            </NavLink>
          </div>
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/addemployee/documents"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              Documents
            </NavLink>
          </div>
        </div>

        <div className="employeedata_form">
          <FormGroup enctype="multipart/form-data">
            <div className="form_header">
              <div className="form_header_photo">
                <div className="photo">
                  <div className="dummy_photo">
                    <i>
                      <AccountCircleIcon style={{ fontSize: "135" }} />
                    </i>
                  </div>
                  <div>
                    <label for="upload-photo">Upload Photo +</label>
                    <input
                      type="file"
                      name="file"
                      id="upload-photo"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>

              <div className="form_header_info">
                <div className="fullname">
                  <h1>{firstName}</h1>
                  <h1>{lastName}</h1>
                </div>

                <div className="position">
                  <h3>{position}</h3>
                </div>
                <div className="contacts">
                  <MailOutlineIcon fontSize="small" />
                  <input
                    name="email"
                    onChange={(e) =>
                      setEmployee({ ...employee, email: e.target.value })
                    }
                    placeholder="Email"
                  />

                  <PhoneIcon fontSize="small" />
                  <input
                    name="phoneNumber"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        phoneNumber: e.target.value,
                      })
                    }
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
                    // style={inputStylesA}
                    onChange={(e) => {
                      setEmployee({ ...employee, firstName: e.target.value });
                      setFirstName(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Input
                    type="text"
                    name="lasttName"
                    onChange={(e) => {
                      setEmployee({ ...employee, lastName: e.target.value });
                      setLastName(e.target.value);
                    }}
                  />
                </FormControl>
                <br />
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Employee ID</InputLabel>
                  <Input
                    type="text"
                    name="employeeID"
                    onChange={(e) => {
                      setEmployee({ ...employee, employeeID: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Position</InputLabel>
                  <Input
                    type="text"
                    name="position"
                    onChange={(e) => {
                      setEmployee({ ...employee, position: e.target.value });
                    }}
                  />
                </FormControl>
              </div>

              <div className="personaldetails_header">
                <h3>PERSONAL DETAILS </h3>
              </div>

              <div className="personaldetails_content">
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Address 1</InputLabel>
                  <Input
                    type="text"
                    name="streetOne"
                    onChange={(e) => {
                      setEmployee({ ...employee, streetOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Address 2</InputLabel>
                  <Input
                    type="text"
                    name="streetTwo"
                    onChange={(e) => {
                      setEmployee({ ...employee, streetTwo: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">City</InputLabel>
                  <Input
                    type="text"
                    name="cityOne"
                    onChange={(e) => {
                      setEmployee({ ...employee, cityOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Country</InputLabel>
                  <Input
                    type="text"
                    name="countryOne"
                    onChange={(e) => {
                      setEmployee({ ...employee, countryOne: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">State / Region</InputLabel>
                  <Input
                    type="text"
                    name="stateOne"
                    onChange={(e) => {
                      setEmployee({ ...employee, stateOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                  <Input
                    type="text"
                    name="postalCodeOne"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        postalCodeOne: e.target.value,
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
                  <Input
                    type="text"
                    name="dateOfBirth"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        dateOfBirth: e.target.value,
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Other Email</InputLabel>
                  <Input
                    type="text"
                    name="otherEmail"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        otherEmail: e.target.value,
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Nationality</InputLabel>
                  <Input
                    type="text"
                    name="nationality"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        nationality: e.target.value,
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Gender</InputLabel>
                  <Select
                    labelId="demo"
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Diverse">Diverse</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Marital Status</InputLabel>
                  <Select
                    labelId="demo"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        maritalStatus: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Separated">Separated</MenuItem>
                    <MenuItem value="Not specified">Not Specified</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Hobbies</InputLabel>
                  <Input
                    type="text"
                    name="hobbies"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        hobbies: e.target.value,
                      });
                    }}
                  />
                </FormControl>
              </div>
            </div>

            <div className="next-btn">
              <button
                onClick={() => {
                  console.log(employee);

                  history.push({
                    pathname: "/dashboard/employeedata/addemployee/hrinfo",
                    state: { employee },
                  });
                }}
              >
                Next{" "}
              </button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
