import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink, Link } from "react-router-dom";

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
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <NavLink
        exact
        to="/dashboard/employeedata/addemployee/documents"
        activeClassName="active"
        className="sidenav_link"
      >
        {" "}
        Documents
      </NavLink>
      <NavLink
        exact
        to="/dashboard/employeedata/addemployee/hrinfo"
        activeClassName="active"
        className="sidenav_link"
      >
        Hr Information
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
          <InputLabel id="demo">Gender</InputLabel>
          <Select
            labelId="demo"
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
              setEmployee({ ...employee, phoneNumber: e.target.value })
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
        <FormControl>
          <Button
            disabled={disabled}
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
  );
};

export default AddEmployee;
