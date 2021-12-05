import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// COMPONENT IMPORTS
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import EmployeeData from "./EmployeeData";

// ICON IMPORTS
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// MUI IMPORTS
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from "@material-ui/core";


const EditEmployee = ({ history, match }) => {
  const [editEmp, setEditEmp] = useState();

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
        setEditEmp(data.data);
      })
      .catch((err) => console.log(err));
  };

  //autofill
  const [firstName, setFirstName] = useState(editEmp?.bio?.firstName);
  const [lastName, setLastName] = useState(editEmp?.bio?.lastName);
  const [position, setPosition] = useState(editEmp?.contractInfo?.position);

  //styling of formControls
  const inputStylesA = {
    width: "46%",
    marginRight: "20px",
  };

  const inputStylesB = {
    width: "30%",
    marginRight: "20px",
  };

  // FORM HEIGHT
  const height = 50

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
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(`/dashboard/employeedata/edithrinfo/${editEmp._id}`);
            }}
          >
            <h4>HR Information</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/editdocuments/${editEmp._id}`
              );
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
                      src={`http://localhost:5000/${editEmp?.bio?.photo}`}
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
                  <h1>{editEmp?.bio?.firstName}</h1>
                  <h1>{editEmp?.bio?.lastName}</h1>
                </div>

                <div className="position">
                  <h3>{editEmp?.contractInfo?.position}</h3>
                </div>

                <div className="contacts">
                  <MailOutlineIcon fontSize="small" />
                  <input
                    name="email"
                    value={editEmp?.bio.email}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.email, email: e.target.value },
                      })
                    }
                    placeholder="Email"
                  />

                  <PhoneIcon fontSize="small" />
                  <input
                    name="phoneNumber"
                    value={editEmp?.bio?.phoneNumber}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.phoneNumber,
                          phoneNumber: e.target.value,
                        },
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

              <Box sx={{ mt: 2 }}>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="First Name"
                    variant="outlined"
                    defaultValue=""
                    margin="normal"
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={editEmp?.bio?.firstName}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.firstName,
                          firstName: e.target.value,
                        },
                      });
                      setFirstName(e.target.value);
                    }} />
                  {/* <InputLabel htmlFor="my-input">First Name</InputLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={editEmp?.bio?.firstName}
                    // style={inputStylesA}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.firstName,
                          firstName: e.target.value,
                        },
                      });
                      setFirstName(e.target.value);
                    }}
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    defaultValue=""
                    margin="normal"
                    name="lastName"
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={editEmp?.bio?.lastName}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp, lastName: e.target.value },
                      });
                      setLastName(e.target.value);
                    }} />

                  {/* <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Input
                    type="text"
                    margin="normal"
                    variant="outlined"
                    defaultValue=""
                    name="lastName"
                    value={editEmp?.bio?.lastName}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp, lastName: e.target.value },
                      });
                      setLastName(e.target.value);
                    }}
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="employeeID"
                    name="employeeID"
                    type="text"
                    label="Employee ID"
                    variant="outlined"
                    defaultValue=""
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.bio?.employeeId}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.employeeId,
                          employeeId: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Employee ID</InputLabel>
                  <Input
                    type="text"
                    name="employeeID"
                    value={editEmp?.bio?.employeeId}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.employeeId,
                          employeeId: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="position"
                    name="position"
                    type="text"
                    label="Position"
                    variant="outlined"
                    defaultValue=""
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.contractInfo?.position}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        contractInfo: {
                          ...editEmp.position,
                          position: e.target.value,
                        },
                      });
                      setPosition(e.target.value);
                    }} />
                  {/* <InputLabel htmlFor="my-input">Position</InputLabel>
                  <Input
                    type="text"
                    name="position"
                    value={editEmp?.contractInfo?.position}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        contractInfo: {
                          ...editEmp.position,
                          position: e.target.value,
                        },
                      });
                      setPosition(e.target.value);
                    }}
                  /> */}
                </FormControl>
              </Box>


              <div className="personaldetails_header">
                <h3>PERSONAL DETAILS </h3>
              </div>

              <Box sx={{ mt: 2 }}>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="streetOne"
                    name="streetOne"
                    type="text"
                    label="Address 1"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.addressOne?.streetOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.streetOne,
                          streetOne: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Address 1</InputLabel>
                  <Input
                    type="text"
                    name="streetOne"
                    focused
                    value={editEmp?.addressOne?.streetOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.streetOne,
                          streetOne: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="streetTwo"
                    name="streetTwo"
                    type="text"
                    label="Address 2"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.addressTwo?.streetTwo}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressTwo: {
                          ...editEmp.streetTwo,
                          streetTwo: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Address 2</InputLabel>
                  <Input
                    type="text"
                    name="streetTwo"
                    value={editEmp?.addressTwo?.streetTwo}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressTwo: {
                          ...editEmp.streetTwo,
                          streetTwo: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="cityOne"
                    name="cityOne"
                    type="text"
                    label="City"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.addressOne?.cityOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        adressOne: {
                          ...editEmp.cityOne,
                          cityOne: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">City</InputLabel>
                  <Input
                    type="text"
                    name="cityOne"
                    value={editEmp?.addressOne?.cityOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        adressOne: {
                          ...editEmp.cityOne,
                          cityOne: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="countryOne"
                    name="countryOne"
                    type="text"
                    label="Country"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.addressOne?.countryOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.countryOne,
                          countryOne: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Country</InputLabel>
                  <Input
                    type="text"
                    name="countryOne"
                    value={editEmp?.addressOne?.countryOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.countryOne,
                          countryOne: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="stateOne"
                    name="stateOne"
                    type="text"
                    label="State / Region"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.addressOne?.stateOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.stateOne,
                          stateOne: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">State / Region</InputLabel>
                  <Input
                    type="text"
                    name="stateOne"
                    value={editEmp?.addressOne?.stateOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.stateOne,
                          stateOne: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="postalCodeOne"
                    name="postalCodeOne"
                    type="text"
                    label="Postal Code"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.addressOne?.postalCodeOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.postalCodeOne,
                          postalCodeOne: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                  <Input
                    type="text"
                    name="postalCodeOne"
                    value={editEmp?.addressOne?.postalCodeOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.postalCodeOne,
                          postalCodeOne: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="text"
                    label="Date of Birth"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.bio?.dateOfBirth}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.dateOfBirth,
                          dateOfBirth: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
                  <Input
                    type="text"
                    name="dateOfBirth"
                    value={editEmp?.bio?.dateOfBirth}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.dateOfBirth,
                          dateOfBirth: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="otherEmail"
                    name="otherEmail"
                    type="text"
                    label="Other Email"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.bio?.otherEmail}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.otherEmail,
                          otherEmail: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Other Email</InputLabel>
                  <Input
                    type="text"
                    name="otherEmail"
                    value={editEmp?.bio?.otherEmail}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.otherEmail,
                          otherEmail: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="nationality"
                    name="nationality"
                    type="text"
                    label="Nationality"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.bio?.nationality}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.nationality,
                          nationality: e.target.value,
                        },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Nationality</InputLabel>
                  <Input
                    type="text"
                    name="nationality"
                    value={editEmp?.bio?.nationality}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.nationality,
                          nationality: e.target.value,
                        },
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel id="gender">Gender</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    name="gender"
                    type="text"
                    label="Gender"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.bio?.gender}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.gender, gender: e.target.value },
                      })
                    }
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Diverse">Diverse</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel id="maritalStatus">Marital Status</InputLabel>
                  <Select
                    labelId="maritalStatus"
                    id="maritalStatus"
                    name="maritalStatus"
                    type="text"
                    label="maritalStatus"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.bio?.maritalStatus}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.maritalStatus,
                          maritalStatus: e.target.value,
                        },
                      })
                    }
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Separated">Separated</MenuItem>
                    <MenuItem value="Not specified">Not Specified</MenuItem>
                  </Select>
                  {/* <InputLabel htmlFor="my-input">Marital Status</InputLabel>
                  <Select
                    labelId="demo"
                    value={editEmp?.bio?.maritalStatus}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.maritalStatus,
                          maritalStatus: e.target.value,
                        },
                      })
                    }
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Separated">Separated</MenuItem>
                    <MenuItem value="Not specified">Not Specified</MenuItem>
                  </Select> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="hobbies"
                    name="hobbies"
                    type="text"
                    label="Hobbies"
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: '0 14px',
                      },
                    }}
                    value={editEmp?.bio?.hobbies}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.hobbies, hobbies: e.target.value },
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Hobbies</InputLabel>
                  <Input
                    type="text"
                    name="hobbies"
                    value={editEmp?.bio?.hobbies}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.hobbies, hobbies: e.target.value },
                      })
                    }
                  /> */}
                </FormControl>
              </Box>
            </div>

            <div className="next-btn">
              <button
                onClick={() => {
                  history.push(
                    `/dashboard/employeedata/edithrinfo/${editEmp._id}`
                  );
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
