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

const EditHrInfo = ({ location, history }) => {
  const [editHrEmp, setEditHrEmp] = useState(
    location.state && location.state.editEmp
  );
  const [file, setFile] = useState();

  const edit = () => {
    const data = new FormData();
    data.append("file", file);
    const readyTOSend = JSON.stringify(editHrEmp);
    data.append("editHrEmp", readyTOSend);

    console.log(editHrEmp);
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
                  <h1>{editHrEmp?.bio.firstName}</h1>
                  <h1>{editHrEmp?.bio.lastName}</h1>
                </div>

                <div className="position">
                  <h3>{editHrEmp?.contractInfo.position}</h3>
                </div>
                <div className="contacts">
                  <MailOutlineIcon fontSize="small" />
                  <input
                    name="email"
                    onChange={(e) =>
                      setEditHrEmp({ ...editHrEmp, email: e.target.value })
                    }
                    placeholder="Email"
                  />

                  <PhoneIcon fontSize="small" />
                  <input
                    name="phoneNumber"
                    onChange={(e) =>
                      setEditHrEmp({
                        ...setEditHrEmp,
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
                    value={editHrEmp?.bio.firstName}
                    // style={inputStylesA}
                    onChange={(e) => {
                      setEditHrEmp({ ...editHrEmp, firstName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={editHrEmp?.bio.lastName}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
                        bio: { ...editHrEmp, lastName: e.target.value },
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Employee ID</InputLabel>
                  <Input
                    type="text"
                    name="employeeID"
                    value={editHrEmp.bio.employeeId}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
                        employeeId: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Position</InputLabel>
                  <Input
                    type="text"
                    name="position"
                    value={editHrEmp.contractInfo.position}
                    onChange={(e) => {
                      setPosition(e.target.value);
                      setEditHrEmp({ ...editHrEmp, position: e.target.value });
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
                    value={editHrEmp.addressOne.streetOne}
                    onChange={(e) => {
                      setEditHrEmp({ ...editHrEmp, streetOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Address 2</InputLabel>
                  <Input
                    type="text"
                    name="streetTwo"
                    value={editHrEmp.addressTwo?.streetTwo}
                    onChange={(e) => {
                      setEditHrEmp({ ...editHrEmp, streetTwo: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">City</InputLabel>
                  <Input
                    type="text"
                    name="cityOne"
                    value={editHrEmp.addressOne.cityOne}
                    onChange={(e) => {
                      setEditHrEmp({ ...editHrEmp, cityOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Country</InputLabel>
                  <Input
                    type="text"
                    name="countryOne"
                    value={editHrEmp.addressOne.countryOne}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
                        countryOne: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">State / Region</InputLabel>
                  <Input
                    type="text"
                    name="stateOne"
                    value={editHrEmp.addressOne.stateOne}
                    onChange={(e) => {
                      setEditHrEmp({ ...editHrEmp, stateOne: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                  <Input
                    type="text"
                    name="postalCodeOne"
                    value={editHrEmp.addressOne.postalCodeOne}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
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
                    value={editHrEmp.bio.dateOfBirth}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
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
                    value={editHrEmp.bio?.otherEmail}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
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
                    value={editHrEmp.bio.nationality}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
                        nationality: e.target.value,
                      });
                    }}
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Gender</InputLabel>
                  <Select
                    labelId="demo"
                    value={editHrEmp.bio.gender}
                    onChange={(e) =>
                      setEditHrEmp({ ...editHrEmp, gender: e.target.value })
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
                    value={editHrEmp.bio.maritalStatus}
                    onChange={(e) =>
                      setEditHrEmp({
                        ...editHrEmp,
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
                    value={editHrEmp.bio.hobbies}
                    onChange={(e) => {
                      setEditHrEmp({
                        ...editHrEmp,
                        hobbies: e.target.value,
                      });
                    }}
                  />
                </FormControl>
              </div>
            </div>

            <div className="next-btn">
              <button onClick={edit}>Save and Update Employee Data</button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EditHrInfo;
