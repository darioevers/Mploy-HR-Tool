import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
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

const EditEmployee = ({ location, history }) => {
  const [editEmp, setEditEmp] = useState(location.state && location.state.employee);
    
  
  const edit = () => {
    console.log(editEmp);
    axios
      .put(
        "http://localhost:5000/employee/update",
        { editEmp },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      {/* edit data */}
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input
            name="firstname"
            value={editEmp.bio.firstName}
            onChange={(e) =>
              setEditEmp({ ...editEmp, bio:{...editEmp.bio, firstName: e.target.value }})
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input
            name="lastname"
            value={editEmp.bio.lastName}
            onChange={(e) =>
              setEditEmp({ ...editEmp,bio:{...editEmp.bio, lastName: e.target.value }})
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            name="email"
            value={editEmp.bio.email}
            onChange={(e) => setEditEmp({ ...editEmp, email: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
          <Input
            name="dateofbirth"
            value={editEmp.bio.dateOfBirth}
            onChange={(e) =>
              setEditEmp({ ...editEmp, dateOfBirth: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Nationality</InputLabel>
          <Input
            name="nationality"
            value={editEmp.bio.nationality}
            onChange={(e) =>
              setEditEmp({ ...editEmp, nationality: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel id="demo">Gender</InputLabel>
          <Select
            labelId="demo"
            value={editEmp.bio.gender}
            onChange={(e) => setEditEmp({ ...editEmp, gender: e.target.value })}
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
            value={editEmp.bio.phoneNumber}
            onChange={(e) =>
              setEditEmp({ ...editEmp, phoneNumber: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Marital Status</InputLabel>
          <Input
            name="maritalStatus"
            value={editEmp.bio.maritalStatus}
            onChange={(e) =>
              setEditEmp({ ...editEmp, maritalStatus: e.target.value })
            }
          />
        </FormControl>

  <FormControl>
          <InputLabel htmlFor="my-input">Status</InputLabel>
          <Input
            name="status"
            value={editEmp.bio.status}
            onChange={(e) => setEditEmp({ ...editEmp, status: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Street</InputLabel>
          <Input
            name="street"
            value={editEmp.addressOne.streetOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, streetOne: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">City</InputLabel>
          <Input
            name="city"
            value={editEmp.addressOne.cityOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, cityOne: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Postal Code</InputLabel>
          <Input
            name="postalCode"
            value={editEmp.addressOne.postalCodeOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, postalCodeOne: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={editEmp.addressOne.stateOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, stateOne: e.target.value })
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
            value={editEmp.addressOne.countryOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, countryOne: e.target.value })
            }
          />
        </FormControl>
      
        <FormControl>
          <Button onClick={edit}>Edit</Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default EditEmployee;
