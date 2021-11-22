import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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
                <div className="photo"></div>
              </div>

              <div className="form_header_info">
                <div className="fullname">
                  <input
                    name="firstname"
                    onChange={(e) =>
                      setEmployee({ ...employee, firstName: e.target.value })
                    }
                    placeholder="First Name"
                  />

                  <input
                    name="lastname"
                    onChange={(e) =>
                      setEmployee({ ...employee, lastName: e.target.value })
                    }
                    placeholder="Last Name"
                  />
                </div>

                <div className="position">
                  <input
                    onChange={(e) =>
                      setEmployee({ ...employee, position: e.target.value })
                    }
                    placeholder="Position"
                  />
                </div>
                <div className="contacts">
                  <MailOutlineIcon />
                  <input
                    name="email"
                    onChange={(e) =>
                      setEmployee({ ...employee, email: e.target.value })
                    }
                    placeholder="Email"
                  />

                  <PhoneIcon />
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
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) =>
                    setEmployee({ ...employee, firstName: e.target.value })
                  }
                />

                <label for="lastName">Last Name</label>
                <input
                  name="lastName"
                  onChange={(e) =>
                    setEmployee({ ...employee, lastName: e.target.value })
                  }
                />
                <br />

                <label for="employeeId">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  onChange={(e) =>
                    setEmployee({ ...employee, employeeId: e.target.value })
                  }
                />

                <label for="position">Position</label>
                <input
                  name="position"
                  onChange={(e) =>
                    setEmployee({ ...employee, position: e.target.value })
                  }
                />
              </div>

              <div className="personal_details_header">
                <h3>PERSONAL DETAILS </h3>
              </div>

              <div className="personal_details_content">
                <label for="addressOne">Address 1</label>
                <input
                  type="text"
                  name="streetOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, streetOne: e.target.value })
                  }
                />

                <label for="addressOne">Address 2</label>
                <input
                  type="text"
                  name="addressTwo"
                  onChange={(e) =>
                    setEmployee({ ...employee, streetTwo: e.target.value })
                  }
                />
                <br />

                <label for="cityOne">City</label>
                <input
                  type="text"
                  name="addressOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, cityOne: e.target.value })
                  }
                />

                <label for="countryOne">Country</label>
                <input
                  type="text"
                  name="countryOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, countryOne: e.target.value })
                  }
                />
                <br />

                <label for="stateOne">State</label>
                <input
                  type="text"
                  name="stateOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, stateOne: e.target.value })
                  }
                />

                <label for="postalCode">Postal Code</label>
                <input
                  type="text"
                  name="postalCodeOne"
                  onChange={(e) =>
                    setEmployee({ ...employee, postalCodeOne: e.target.value })
                  }
                />
                <br />

                <label for="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  onChange={(e) =>
                    setEmployee({ ...employee, dateOfBirth: e.target.value })
                  }
                />

                <label for="otherEmail">Other Email</label>
                <input
                  type="text"
                  name="otherEmail"
                  onChange={(e) =>
                    setEmployee({ ...employee, otherEmail: e.target.value })
                  }
                />
                <br />

                <label for="nationality">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  onChange={(e) =>
                    setEmployee({ ...employee, nationality: e.target.value })
                  }
                />

                <InputLabel id="demo">Gender</InputLabel>
                <Select
                  labelId="demo"
                  onChange={(e) =>
                    setEmployee({ ...employee, gender: e.target.value })
                  }
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="x">Diverse</MenuItem>
                </Select>
                <br />

                <InputLabel id="demo">Marital Status</InputLabel>
                <Select
                  labelId="demo"
                  onChange={(e) =>
                    setEmployee({ ...employee, maritalStatus: e.target.value })
                  }
                >
                  <MenuItem value="male">Single</MenuItem>
                  <MenuItem value="female">Married</MenuItem>
                  <MenuItem value="x">Separated</MenuItem>
                  <MenuItem value="x">Not Specified</MenuItem>
                </Select>

                <label for="hobbies">Hobbies</label>
                <input
                  type="text"
                  name="hobbies"
                  onChange={(e) =>
                    setEmployee({ ...employee, hobbies: e.target.value })
                  }
                />
                <br />
              </div>

              <FormControl>
                <InputLabel htmlFor="my-input">Marital Status</InputLabel>
                <Input
                  name="maritalStatus"
                  onChange={(e) =>
                    setEmployee({ ...employee, maritalStatus: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input">Street</InputLabel>
                <Input
                  name="street"
                  onChange={(e) =>
                    setEmployee({ ...employee, streetOne: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input
                  name="city"
                  onChange={(e) =>
                    setEmployee({ ...employee, cityOne: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                <Input
                  name="postalCode"
                  onChange={(e) =>
                    setEmployee({ ...employee, postalCodeOne: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  onChange={(e) =>
                    setEmployee({ ...employee, stateOne: e.target.value })
                  }
                >
                  <MenuItem value="sachsen">Schsen</MenuItem>
                  <MenuItem value="Berlin">Berlin</MenuItem>
                  <MenuItem value="Hamburg">Hamburg</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Country</InputLabel>
                <Input
                  name="Country"
                  onChange={(e) =>
                    setEmployee({ ...employee, countryOne: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Status</InputLabel>
                <Input
                  name="status"
                  onChange={(e) =>
                    setEmployee({ ...employee, status: e.target.value })
                  }
                />
              </FormControl>
            </div>

            <FormControl>
              <Button
                onClick={() => {
                  console.log(employee);

                  history.push({
                    pathname: "/dashboard/employeedata/addemployee/hrinfo",
                    state: { employee },
                  });
                }}
              >
                Next{" "}
              </Button>
            </FormControl>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
