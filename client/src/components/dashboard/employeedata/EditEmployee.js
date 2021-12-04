import React, { useState, useEffect, useCallback } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import axios from "axios";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
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

  //styling of formControls
  const inputStylesA = {
    width: "46%",
    marginRight: "20px",
  };

  const inputStylesB = {
    width: "30%",
    marginRight: "20px",
  };

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
        setEditEmp(data.data);
      })
      .catch((err) => console.log(err));
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
            {/* <div className="form_header">
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
            </div> */}
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
                    value={editEmp?.bio?.firstName}
                    // style={inputStylesA}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, firstName: e.target.value },
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={editEmp?.bio?.lastName}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.bio,
                          lastName: e.target.value,
                        },
                      })
                    }
                    // setLastName(e.target.value);
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={editEmp?.bio?.phoneNumber}
                    // style={inputStylesA}

                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, phoneNumber: e.target.value },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Email</InputLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={editEmp?.bio?.email}
                    // style={inputStylesA}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, email: e.target.value },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Employee ID</InputLabel>
                  <Input
                    type="text"
                    name="employeeID"
                    value={editEmp?.bio?.employeeId}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, employeeId: e.target.value },
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Position</InputLabel>
                  <Input
                    type="text"
                    name="position"
                    value={editEmp?.contractInfo?.position}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        contractInfo: {
                          ...editEmp.contractInfo,
                          position: e.target.value,
                        },
                      })
                    }
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
                    value={editEmp?.addressOne?.streetOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.addressOne,
                          streetOne: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Address 2</InputLabel>
                  <Input
                    type="text"
                    name="streetTwo"
                    value={editEmp?.addressTwo?.streetTwo}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressTwo: {
                          ...editEmp?.addressTwo,
                          streetTwo: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">City</InputLabel>
                  <Input
                    type="text"
                    name="cityOne"
                    value={editEmp?.addressOne?.cityOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.addressOne,
                          cityOne: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Country</InputLabel>
                  <Input
                    type="text"
                    name="countryOne"
                    value={editEmp?.addressOne?.countryOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.addressOne,
                          countryOne: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">State / Region</InputLabel>
                  <Input
                    type="text"
                    name="stateOne"
                    value={editEmp?.addressOne?.stateOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.addressOne,
                          stateOne: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                  <Input
                    type="text"
                    name="postalCodeOne"
                    value={editEmp?.addressOne?.postalCodeOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressOne: {
                          ...editEmp.addressOne,
                          postalCodeOne: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
                  <Input
                    type="text"
                    name="dateOfBirth"
                    value={editEmp?.bio?.dateOfBirth}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, dateOfBirth: e.target.value },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Other Email</InputLabel>
                  <Input
                    type="text"
                    name="otherEmail"
                    value={editEmp?.bio?.otherEmail}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, otherEmail: e.target.value },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Nationality</InputLabel>
                  <Input
                    type="text"
                    name="nationality"
                    value={editEmp?.bio?.nationality}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, nationality: e.target.value },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Gender</InputLabel>
                  <Select
                    labelId="demo"
                    value={editEmp?.bio?.gender}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, gender: e.target.value },
                      })
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
                    value={editEmp?.bio?.maritalStatus}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, maritalStatus: e.target.value },
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
                    value={editEmp?.bio?.hobbies}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, hobbies: e.target.value },
                      })
                    }
                  />
                </FormControl>
              </div>
            </div>

            <div className="next-btn">
              <button
                onClick={() => {
                  console.log(editEmp);
                  history.push({
                    pathname: "/dashboard/employeedata/edithrinfo",
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
