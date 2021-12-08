import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

// MUI IMPORTS
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormGroup,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

const EditEmployee = ({ history, location }) => {
  const [editEmp, setEditEmp] = useState(
    location.state && location.state.employee
  );


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
  const height = 50;

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      {/* personal edit data */}

      <div className="editemployee_wrapper">
        <Typography variant="h4" gutterBottom>
          <Box sx={{ fontWeight: 500 }}>
            {t("dashboardEditEmployeeData.title01")}
          </Box>
        </Typography>
        <div className="addemployee_header">
          <div className="active_tab">
            <h4>{t("dashboardEditEmployeeData.menu01")}</h4>
          
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push({
                pathname: "/dashboard/employeedata/edithrinfo",
                state: { editEmp },
              });
            }}
          >
            <h4>{t("dashboardEditEmployeeData.menu02")}</h4>
          </div>
        </div>
        <div className="employeedata_form">
          <FormGroup>
            <div className="form_generaldata">
              <div className="basicdetails_header">
                <h3>{t("dashboardEditEmployeeData.sectionHeading01")}</h3>
              </div>

              <Box sx={{ mt: 2 }}>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc01")}
                    variant="outlined"
                    defaultValue=""
                    margin="normal"
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={editEmp?.bio?.firstName}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.bio,
                          firstName: e.target.value,
                        },

                      })
                    }

                  />
 

                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="lastName"
                    label={t("dashboardEditEmployeeData.formDesc02")}
                    variant="outlined"
                    type="text"
                    defaultValue=""
                    margin="normal"
                    name="lastName"
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ shrink: true }}
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

                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="employeeID"
                    name="employeeID"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc03")}
                    variant="outlined"
                    defaultValue=""
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.bio?.employeeId}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.bio,
                          lastName: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="position"
                    name="position"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc04")}
                    variant="outlined"
                    defaultValue=""
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.contractInfo?.position}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        contractInfo: {

                          ...editEmp.contractInfo,
                          position: e.target.value,
                        },
                      });
                    }}
                  />
                 
                </FormControl>
              </Box>

              <div className="personaldetails_header">
                <h3>{t("dashboardEditEmployeeData.sectionHeading02")}</h3>
              </div>

              <Box sx={{ mt: 2 }}>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="streetOne"
                    name="streetOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc05")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
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
                  <TextField
                    id="streetTwo"
                    name="streetTwo"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc06")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.addressTwo?.streetTwo}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        addressTwo: {
                          ...editEmp.addressTwo,
                          streetTwo: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="cityOne"
                    name="cityOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc07")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.addressOne?.cityOne}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        adressOne: {
                          ...editEmp.addressOne,
                          cityOne: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="countryOne"
                    name="countryOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc08")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
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
                  <TextField
                    id="stateOne"
                    name="stateOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc09")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
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
                  <TextField
                    id="postalCodeOne"
                    name="postalCodeOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc10")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
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
                  <TextField
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc11")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.bio?.dateOfBirth}
                    onChange={(e) => {
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.bio,
                          dateOfBirth: e.target.value,
                        },
                      });
                     
                    } 
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="otherEmail"
                    name="otherEmail"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc12")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
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
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="nationality"
                    name="nationality"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc13")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
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
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <Select
                    labelId="gender"
                    id="gender"
                    name="gender"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc14")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.bio?.gender}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,

                        bio: {
                          ...editEmp.bio,
                          gender: e.target.value,
                        },

                      })
                    }
                  >
                    <MenuItem value="Male">
                      {t("dashboardEditEmployeeData.formSelect01")}
                    </MenuItem>
                    <MenuItem value="Female">
                      {t("dashboardEditEmployeeData.formSelect02")}
                    </MenuItem>
                    <MenuItem value="Diverse">
                      {t("dashboardEditEmployeeData.formSelect03")}
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={inputStylesB}>
                  <Select
                    labelId="maritalStatus"
                    id="maritalStatus"
                    name="maritalStatus"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc15")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.bio?.maritalStatus}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: {
                          ...editEmp.bio,
                          maritalStatus: e.target.value,
                        },
                      })
                    }
                  >
                    <MenuItem value="Single">
                      {t("dashboardEditEmployeeData.formSelect04")}
                    </MenuItem>
                    <MenuItem value="Married">
                      {t("dashboardEditEmployeeData.formSelect05")}
                    </MenuItem>
                    <MenuItem value="Separated">
                      {t("dashboardEditEmployeeData.formSelect06")}
                    </MenuItem>
                    <MenuItem value="Not specified">
                      {t("dashboardEditEmployeeData.formSelect07")}
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="hobbies"
                    name="hobbies"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc16")}
                    variant="outlined"
                    defaultValue=""
                    style={{ marginTop: "1em" }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    value={editEmp?.bio?.hobbies}
                    onChange={(e) =>
                      setEditEmp({
                        ...editEmp,
                        bio: { ...editEmp.bio, hobbies: e.target.value },
                      })
                    }
                  />
                </FormControl>
              </Box>
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
                {t("dashboardEditEmployeeData.formButton01")}{" "}
              </button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
