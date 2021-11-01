import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink, Link } from "react-router-dom";

import axios from "axios";
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

const AddEmployee = () => {
  const [employee, setEmployee] = useState({});

  const addNew = () => {
    const data = employee;
    console.log(employee);
    axios
      .post(
        "http://localhost:5000/employee/addemployee",
        data,

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      <NavLink
        exact
        to="/dashboard/employeedata/addemployee/hrinfo"
        activeClassName="active"
        className="sidenav_link"
      >
        HR Information
      </NavLink>

      <NavLink
        exact
        to="/dashboard/employeedata/addemployee/documents"
        activeClassName="active"
        className="sidenav_link"
      >
        {" "}
        Documents
      </NavLink>
      <FormGroup>
        <Typography variant="h4">Personal Inforamtion</Typography>
        {/* <FormControl>
          <InputLabel htmlFor="my-input">Photo</InputLabel>
          <Input
            value={photo}
            name="photo"
            onChange={(e) => setPhoto(e.target.value)}
          />
        </FormControl> */}
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input
            name="firstname"
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input
            name="lastname"
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            name="email"
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
          <Input
            name="dateofbirth"
            onChange={(e) =>
              setEmployee({ ...employee, dateOfBirth: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Nationality</InputLabel>
          <Input
            name="nationality"
            onChange={(e) =>
              setEmployee({ ...employee, nationality: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={(e) =>
              setEmployee({ ...employee, gender: e.target.value })
            }
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="x">X</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Phone Number</InputLabel>
          <Input
            name="phoneNumber"
            onChange={(e) =>
              setEmployee({ ...employee, phone: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Marital Status</InputLabel>
          <Input
            name="maritalStatus"
            onChange={(e) =>
              setEmployee({ ...employee, maritalStatus: e.target.value })
            }
          />
        </FormControl>

        {/* <FormControl>
          <InputLabel htmlFor="my-input">Street</InputLabel>
          <Input
            name="street"
            onChange={(e) =>
              setEmployee({ ...employee, street: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">City</InputLabel>
          <Input
            name="city"
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Postal Code</InputLabel>
          <Input
            name="postalCode"
            onChange={(e) =>
              setEmployee({ ...employee, postalCode: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={(e) =>
              setEmployee({ ...employee, state: e.target.value })
            }
          >
            <MenuItem>Schsen</MenuItem>
            <MenuItem>Berlin</MenuItem>
            <MenuItem>Hamburg</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Country</InputLabel>
          <Input
            name="Country"
            onChange={(e) =>
              setEmployee({ ...employee, country: e.target.value })
            }
          />
        </FormControl> */}

        <FormControl>
          <Button onClick={addNew}>Add </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default AddEmployee;
