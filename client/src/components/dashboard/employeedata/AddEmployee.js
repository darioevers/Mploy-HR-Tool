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

            <div className="form_basicdetails">
              <div className="basic_details_header">
                <h3>BASIC DETAILS </h3>
              </div>

              <div className="basicdetails_content">
                <h2> First Name</h2>
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) => {
                    setEmployee({ ...employee, firstName: e.target.value });
                    setFirstName(e.target.value);
                  }}
                />
                <h2> Last Name</h2>
                <input
                  name="lastName"
                  onChange={(e) => {
                    setEmployee({ ...employee, lastName: e.target.value });
                    setLastName(e.target.value);
                  }}
                />
                <br />
                <h2> Employee ID</h2>
                <input
                  type="text"
                  name="employeeId"
                  onChange={(e) =>
                    setEmployee({ ...employee, employeeId: e.target.value })
                  }
                />
                <h2> Position</h2>
                <input
                  name="position"
                  onChange={(e) => {
                    setEmployee({ ...employee, position: e.target.value });
                    setPosition(e.target.value);
                  }}
                />
              </div>

              <div className="personal_details_header">
                <h3>PERSONAL DETAILS </h3>
              </div>

              <div className="personal_details_content">
                <h2> Address 1</h2>
                <input
                  type="text"
                  name="streetOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, streetOne: e.target.value })
                  }
                />

                <h2> Address 2</h2>
                <input
                  type="text"
                  name="addressTwo"
                  onChange={(e) =>
                    setEmployee({ ...employee, streetTwo: e.target.value })
                  }
                />
                <br />

                <h2> City</h2>
                <input
                  type="text"
                  name="addressOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, cityOne: e.target.value })
                  }
                />

                <h2> Country</h2>
                <input
                  type="text"
                  name="countryOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, countryOne: e.target.value })
                  }
                />
                <br />

                <h2>State</h2>
                <input
                  type="text"
                  name="stateOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, stateOne: e.target.value })
                  }
                />

                <h2> Postal Code</h2>
                <input
                  type="text"
                  name="postalCodeOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, postalCodeOne: e.target.value })
                  }
                />
                <br />

                <h2> Date of Birth</h2>
                <input
                  type="date"
                  name="dateOfBirth"
                  onChange={(e) =>
                    setEmployee({ ...employee, dateOfBirth: e.target.value })
                  }
                />

                <h2> Other Email</h2>
                <input
                  type="text"
                  name="otherEmail"
                  onChange={(e) =>
                    setEmployee({ ...employee, otherEmail: e.target.value })
                  }
                />
                <br />

                <h2>Nationality</h2>
                <input
                  type="text"
                  name="nationality"
                  onChange={(e) =>
                    setEmployee({ ...employee, nationality: e.target.value })
                  }
                />

                <h2>Gender</h2>
                <Select
                  labelId="demo"
                  onChange={(e) =>
                    setEmployee({ ...employee, gender: e.target.value })
                  }
                  style={{
                    width: "32%",
                    height: "25px",
                    fontSize: "15px",
                    backgroundColor: "#FFFFFF",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    margin: "0px 20px 10px 0px",
                    padding: "2px 10px",
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="x">Diverse</MenuItem>
                </Select>
                <br />

                <h2>Marital Status</h2>
                <Select
                  labelId="demo"
                  onChange={(e) =>
                    setEmployee({ ...employee, maritalStatus: e.target.value })
                  }
                  style={{
                    width: "32%",
                    height: "25px",
                    backgroundColor: "#FFFFFF",
                    fontSize: "14px",
                    border: "none",
                    borderRadius: "5px",
                    margin: "0px 20px 10px 0px",
                    padding: "2px 10px",
                  }}
                >
                  <MenuItem value="male">Single</MenuItem>
                  <MenuItem value="female">Married</MenuItem>
                  <MenuItem value="x">Separated</MenuItem>
                  <MenuItem value="x">Not Specified</MenuItem>
                </Select>

                <h2> Hobbies</h2>
                <input
                  type="text"
                  name="hobbies"
                  onChange={(e) =>
                    setEmployee({ ...employee, hobbies: e.target.value })
                  }
                />
                <br />
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
