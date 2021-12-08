import React, { useState } from "react";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/NewDashboardSideNav";


// MUI IMPORTS
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NativeSelect from '@mui/material/NativeSelect';

// ICON IMPORTS
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import countrydata from "../../../selectData/countries";

const AddEmployee = ({ history }) => {
  const [employee, setEmployee] = useState({});

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

  // FORM HEIGHT
  const height = 45;

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="addemployee_wrapper">
        <h1>{t("dashboardAddEmployee.title01")}</h1>
        <div className="addemployee_header">
          <div className="active_tab">
            <h4>{t("dashboardEditEmployeeData.menu01")}</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push({
                pathname: "/dashboard/employeedata/addhrinfo",
                state: { employee },
              });
            }}
          >
            <h4>{t("dashboardEditEmployeeData.menu02")}</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push({
                pathname: "/dashboard/employeedata/adddocuments",
                state: { employee },
              });
            }}
          >
            <h4>{t("dashboardEditEmployeeData.menu03")}</h4>
          </div>
        </div>

        <div className="employeedata_form">
          <FormGroup enctype="multipart/form-data">
            <div className="form_header"></div>

            <div className="form_generaldata">
              <div className="basicdetails_header">
                <h3>{t("dashboardAddEmployee.sectionHeading01")}</h3>
              </div>

              <div className="basicdetails_content">
                <FormControl style={inputStylesA}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc01")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 17 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, firstName: e.target.value });
                      setFirstName(e.target.value);
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">{t("dashboardEditEmployeeData.formDesc01")}</InputLabel>
                  <Input
                    type="text"
                    name="firstName"
                    onChange={(e) => {
                      setEmployee({ ...employee, firstName: e.target.value });
                      setFirstName(e.target.value);
                    }}
                  /> */}

                </FormControl>
                <FormControl style={inputStylesA}>

                  <TextField
                    id="lastName"
                    name="lastName"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc02")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        padding: "0 14px",
                        height,
                      },
                    }}
                    onChange={(e) => {
                      setEmployee({ ...employee, lastName: e.target.value });
                      setLastName(e.target.value);
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Input
                    type="text"
                    name="lasttName"
                    onChange={(e) => {
                      setEmployee({ ...employee, lastName: e.target.value });
                      setLastName(e.target.value);
                    }}
                  />*/}
                </FormControl>

                <FormControl style={inputStylesA}>
                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    label={t("dashboardEditEmployeeData.phone")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    onChange={(e) => {
                      setEmployee({ ...employee, phoneNumber: e.target.value });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                  <Input
                    type="text"
                    name="phoneNumber"
                    onChange={(e) => {
                      setEmployee({ ...employee, phoneNumber: e.target.value });
                    }}
                  /> */}
                </FormControl>

                <FormControl style={inputStylesA}>
                  <TextField
                    id="email"
                    name="email"
                    type="text"
                    label={t("dashboardEditEmployeeData.email")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 17 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, email: e.target.value });
                    }}
                    required
                  />
                  {/* <InputLabel htmlFor="my-input">Email</InputLabel>
                  <Input
                    type="text"
                    name="email"
                    onChange={(e) => {
                      setEmployee({ ...employee, email: e.target.value });
                    }}
                    required
                  /> */}
                </FormControl>

                <FormControl style={inputStylesA}>
                  <TextField
                    id="employeeID"
                    name="employeeID"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc03")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 17 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, employeeID: e.target.value });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Employee ID</InputLabel>
                  <Input
                    type="text"
                    name="employeeID"
                    onChange={(e) => {
                      setEmployee({ ...employee, employeeID: e.target.value });
                    }}
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="position"
                    name="position"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc04")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 17 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, position: e.target.value });
                      setPosition(e.target.value);
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Position</InputLabel>
                  <Input
                    type="text"
                    name="position"
                    onChange={(e) => {
                      setEmployee({ ...employee, position: e.target.value });
                      setPosition(e.target.value);
                    }}
                  /> */}
                </FormControl>
              </div>

              <div className="personaldetails_header">
                <h3>{t("dashboardEditEmployeeData.sectionHeading02")}</h3>
              </div>

              <div className="personaldetails_content_one">
                <FormControl style={inputStylesB}>
                  <TextField
                    id="streetOne"
                    name="streetOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc05")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, streetOne: e.target.value });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Address 1</InputLabel>
                  <Input
                    type="text"
                    name="streetOne"
                    onChange={(e) => {
                      setEmployee({ ...employee, streetOne: e.target.value });
                    }}
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="streetTwo"
                    name="streetTwo"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc06")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, streetTwo: e.target.value });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Address 2</InputLabel>
                  <Input
                    type="text"
                    name="streetTwo"
                    onChange={(e) => {
                      setEmployee({ ...employee, streetTwo: e.target.value });
                    }}
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="cityOne"
                    name="cityOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc07")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, cityOne: e.target.value });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">City</InputLabel>
                  <Input
                    type="text"
                    name="cityOne"
                    onChange={(e) => {
                      setEmployee({ ...employee, cityOne: e.target.value });
                    }}
                  /> */}
                </FormControl>
                <FormControl style={inputStylesB}>
                  <Select
                    label={t("dashboardEditEmployeeData.formDesc08")}
                    labelId="demo"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) =>
                      setEmployee({ ...employee, countryOne: e.target.value })
                    }
                  >
                    {countrydata.map((data) => (
                      <MenuItem value={data}>{data}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="stateOne"
                    name="stateOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc09")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({ ...employee, stateOne: e.target.value });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">State / Region</InputLabel>
                  <Input
                    type="text"
                    name="stateOne"
                    onChange={(e) => {
                      setEmployee({ ...employee, stateOne: e.target.value });
                    }}
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="postalCodeOne"
                    name="postalCodeOne"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc10")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        postalCodeOne: e.target.value,
                      });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                  <Input
                    type="text"
                    name="postalCodeOne"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        postalCodeOne: e.target.value,
                      });
                    }}
                  /> */}
                </FormControl>
              </div>
              <div className="personaldetails_content_two">
                <FormControl style={inputStylesB}>
                  <TextField
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc11")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        dateOfBirth: e.target.value,
                      });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
                  <Input
                    type="date"
                    name="dateOfBirth"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        dateOfBirth: e.target.value,
                      });
                    }}
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="otherEmail"
                    name="otherEmail"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc12")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        otherEmail: e.target.value,
                      });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Other Email</InputLabel>
                  <Input
                    type="text"
                    name="otherEmail"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        otherEmail: e.target.value,
                      });
                    }}
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="nationality"
                    name="nationality"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc13")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    oonChange={(e) => {
                      setEmployee({
                        ...employee,
                        nationality: e.target.value,
                      });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Nationality</InputLabel>
                  <Input
                    type="text"
                    name="nationality"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        nationality: e.target.value,
                      });
                    }}
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="gender"
                    name="gender"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc14")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">Gender</InputLabel>
                  <Select
                    labelId="demo"
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Diverse">Diverse</MenuItem>
                  </Select> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="maritalStatus"
                    name="maritalStatus"
                    type="text"
                    label={t("dashboardEditEmployeeData.formDesc15")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        maritalStatus: e.target.value,
                      })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">Marital Status</InputLabel>
                  <Select
                    labelId="demo"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        maritalStatus: e.target.value,
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
                    label={t("dashboardEditEmployeeData.formDesc16")}
                    variant="outlined"
                    defaultValue=""
                    margin="dense"
                    fullWidth
                    inputProps={{
                      style: {
                        height,
                        padding: "0 14px",
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        hobbies: e.target.value,
                      });
                    }}
                  />
                  {/* <InputLabel htmlFor="my-input">Hobbies</InputLabel>
                  <Input
                    type="text"
                    name="hobbies"
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        hobbies: e.target.value,
                      });
                    }}
                  /> */}
                </FormControl>
              </div>
            </div>

            <div className="next-btn">
              <button
                onClick={() => {
                  history.push({
                    pathname: "/dashboard/employeedata/addhrinfo",
                    state: { employee },
                  });
                }}
              >
                {t("dashboardEditHRData.formButton01")}{" "}
              </button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
