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

const EditEmployee = ({ location, history }) => {
  const [editEmp, setEditEmp] = useState(
    location.state && location.state.employee
  );
  const [file, setFile] = useState();

  const edit = () => {
    const data = new FormData();
    data.append("file", file);
    const readyTOSend = JSON.stringify(editEmp);
    data.append("editEmp", readyTOSend);

    console.log(editEmp);
    axios
      .put("http://localhost:5000/employee/update", data, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        history.push("/dashboard/employeedata/");
      })
      .catch((err) => console.log(err));
  };
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
      {/* personal edit data */}

      <div className="editemployee_wrapper">
        <h1> Edit Employee </h1>
        <div className="addemployee_header">
          <div className="active_tab">
            <h4>General Data</h4>
          </div>
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/editemployee/edithrinfo"
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
          <FormGroup>
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
                  {/* <h1>{editEmp.bio.firstName}</h1>
                  <h1>{editEmp.bio.lastName}</h1> */}
                </div>

                <div className="position">
                  <h3>{editEmp.contractInfo.position}</h3>
                </div>
                <div className="contacts">
                  <MailOutlineIcon fontSize="small" />
                  <input
                    name="email"
                    onChange={(e) =>
                      setEditEmp({ ...editEmp, email: e.target.value })
                    }
                    placeholder="Email"
                  />

                  <PhoneIcon fontSize="small" />
                  <input
                    name="phoneNumber"
                    onChange={(e) =>
                      setEditEmp({
                        ...setEditEmp,
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
                    value={editEmp.bio.firstName}
                    // style={inputStylesA}
                    onChange={(e) => {
                      setEditEmp({ ...editEmp, firstName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={editEmp.bio.lastName}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp, lastName: e.target.value },
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Employee ID</InputLabel>
                  <Input
                    type="text"
                    name="employeeID"
                    value={editEmp.bio.employeeId}
                    onChange={(e) => {
                      setEditEmp({ ...editEmp, employeeId: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Position</InputLabel>
                  <Input
                    type="text"
                    name="position"
                    value={editEmp.contractInfo.position}
                    onChange={(e) => {
                      setPosition(e.target.value);
                      setEditEmp({ ...editEmp, position: e.target.value });
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
                    value={editEmp.addressOne.streetOne}
                    onChange={(e) => {
                      setEditEmp({ ...editEmp, streetOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Address 2</InputLabel>
                  <Input
                    type="text"
                    name="streetTwo"
                    value={editEmp.addressTwo?.streetTwo}
                    onChange={(e) => {
                      setEditEmp({ ...editEmp, streetTwo: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">City</InputLabel>
                  <Input
                    type="text"
                    name="cityOne"
                    value={editEmp.addressOne.cityOne}
                    onChange={(e) => {
                      setEditEmp({ ...editEmp, cityOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Country</InputLabel>
                  <Input
                    type="text"
                    name="countryOne"
                    value={editEmp.addressOne.countryOne}
                    onChange={(e) => {
                      setEditEmp({ ...editEmp, countryOne: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">State / Region</InputLabel>
                  <Input
                    type="text"
                    name="stateOne"
                    value={editEmp.addressOne.stateOne}
                    onChange={(e) => {
                      setEditEmp({ ...editEmp, stateOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                  <Input
                    type="text"
                    name="postalCodeOne"
                    value={editEmp.addressOne.postalCodeOne}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
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
                    value={editEmp.bio.dateOfBirth}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
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
                    value={editEmp.bio?.otherEmail}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
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
                    value={editEmp.bio.nationality}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        nationality: e.target.value,
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Gender</InputLabel>
                  <Select
                    labelId="demo"
                    value={editEmp.bio.gender}
                    onChange={(e) =>
                      setEditEmp({ ...editEmp, gender: e.target.value })
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
                    value={editEmp.bio.maritalStatus}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
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
                    value={editEmp.bio.hobbies}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
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
                  history.push({
                    pathname: "/dashboard/employeedata/editemployee/edithrinfo",
                    state: { editEmp },
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

export default EditEmployee;
