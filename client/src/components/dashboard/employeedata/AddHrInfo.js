import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

// MUI IMPORTS
import { FormGroup, FormControl, InputLabel, Input } from "@material-ui/core";
import TextField from "@mui/material/TextField";

const AddHrInfo = ({ location, history }) => {
  const [employeeData, setEmployeeData] = useState(
    location.state && location.state.employee
  );
  const [hireDate, setHireDate] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [addWorkExperience, setAddWorkExperience] = useState(false);

  //styling of formControls
  const inputStylesA = {
    width: "30%",
    marginRight: "20px",
  };

  const inputStylesB = {
    width: "22%",
    marginRight: "20px",
  };

  const handleAddEducation = () => setAddEducation(!addEducation);
  const handleAddWorkExperience = () =>
    setAddWorkExperience(!addWorkExperience);

  // FORM HEIGHT
  const height = 45;

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="addhrinfo_wrapper">
        <h1>  {t("dashboardAddEmployee.title01")} </h1>
        <div className="addhrinfo_header">
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/addemployee"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              {t("dashboardEditHRData.menu01")}
            </NavLink>
          </div>
          <div className="active_tab">
            <h4>{t("dashboardEditHRData.menu02")}</h4>
          </div>
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/adddocuments"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              {t("dashboardEditHRData.menu03")}
            </NavLink>
          </div>
        </div>

        <FormGroup>
          <div className="addhrinfo_form">
            <div className="addhrinfo_contractdetails_header">
              <h3>{t("dashboardEditHRData.sectionHeading01")}</h3>
            </div>

            <div className="addhrinfo_contractdetails_content">
              <FormControl style={inputStylesA}>
                <TextField
                  id="contractNo"
                  name="contractNo"
                  type="text"
                  label={t("dashboardEditHRData.formDesc01")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      contractNo: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Contract No</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      contractNo: e.target.value,
                    })
                  }
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="hireDate"
                  name="hireDate"
                  type="date"
                  label={t("dashboardEditHRData.formDesc02")}
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
                  onChange={(e) => {
                    setHireDate(e.target.value);
                    setEmployeeData({
                      ...employeeData,
                      hireDate: e.target.value,
                    });
                  }}
                />
                {/* <InputLabel htmlFor="my-input">Hire Date</InputLabel>
                <Input
                  autoFocus
                  type="date"
                  onChange={(e) => {
                    setHireDate(e.target.value);
                    setEmployeeData({
                      ...employeeData,
                      hireDate: e.target.value,
                    });
                  }}
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="contractEnd"
                  name="contractEnd"
                  type="date"
                  label={t("dashboardEditHRData.formDesc03")}
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
                  onChange={(e) => {
                    setHireDate(e.target.value);
                    setEmployeeData({
                      ...employeeData,
                      hireDate: e.target.value,
                    });
                  }}
                />
                {/* <InputLabel htmlFor="my-input">Contract End</InputLabel>
                <Input
                  type="date"
                  min="2019-01-01"
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      contractEnd: e.target.value,
                    })
                  }
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="probationPeriod"
                  name="probationPeriod"
                  type="date"
                  label={t("dashboardEditHRData.formDesc04")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      probationPeriod: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Probation Period</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      probationPeriod: e.target.value,
                    })
                  }
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="employmentType"
                  name="employmentType"
                  type="text"
                  label={t("dashboardEditHRData.formDesc05")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      employmentType: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Employment Type</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      employmentType: e.target.value,
                    })
                  }
                /> */}
              </FormControl>

              <FormControl style={inputStylesA}>
                <TextField
                  id="team"
                  name="team"
                  type="text"
                  label={t("dashboardEditHRData.formDesc06")}
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
                  onChange={(e) =>
                    setEmployeeData({ ...employeeData, team: e.target.value })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Team</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({ ...employeeData, team: e.target.value })
                  }
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="department"
                  name="department"
                  type="text"
                  label={t("dashboardEditHRData.formDesc07")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      department: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      department: e.target.value,
                    })
                  }
                /> */}
              </FormControl>

              <FormControl style={inputStylesA}>
                <TextField
                  id="supervisor"
                  name="supervisor"
                  type="text"
                  label={t("dashboardEditHRData.formDesc08")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      supervisor: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Supervisor</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      supervisor: e.target.value,
                    })
                  }
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="salary"
                  name="salary"
                  type="text"
                  label={t("dashboardEditHRData.formDesc09")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      salary: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Salary</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      salary: e.target.value,
                    })
                  }
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="overtime"
                  name="overtime"
                  type="text"
                  label={t("dashboardEditHRData.formDesc10")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      overtime: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Overtime</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      overtime: e.target.value,
                    })
                  }
                /> */}
              </FormControl>
              <FormControl style={inputStylesA}>
                <TextField
                  id="workLocation"
                  name="workLocation"
                  type="text"
                  label={t("dashboardEditHRData.formDesc11")}
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
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      workLocation: e.target.value,
                    })
                  }
                />
                {/* <InputLabel htmlFor="my-input">Work Location</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      workLocation: e.target.value,
                    })
                  }
                /> */}
              </FormControl>
            </div>

            <div className="addhrinfo_education_header">
              <h3>{t("dashboardEditHRData.sectionHeading02")}</h3>
            </div>

            {addEducation && (
              <div clasName="addhrinfo_education_content">
                <FormControl style={inputStylesB}>
                  <TextField
                    id="workLocation"
                    name="workLocation"
                    type="text"
                    label={t("dashboardEditHRData.formDesc12")}
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
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        school: e.target.value,
                      })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">School Name</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        school: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="degree"
                    name="degree"
                    type="text"
                    label={t("dashboardEditHRData.formDesc13")}
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
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        degree: e.target.value,
                      })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">Degree</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        degree: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    type="text"
                    label={t("dashboardEditHRData.formDesc14")}
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
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        specialization: e.target.value,
                      })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">Field Of Study</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        specialization: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesB}>
                  <TextField
                    id="yearofCompletion"
                    name="yearofCompletion"
                    type="text"
                    label={t("dashboardEditHRData.formDesc15")}
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
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        endDate: e.target.value,
                      })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">Year Of Completion</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        endDate: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
              </div>
            )}
            <button className="add-btn" onClick={handleAddEducation}>
              {t("dashboardEditHRData.sectionHeadingButton01")}{" "}
            </button>

            <div className="addhrinfo_workexperience_header">
              <h3>{t("dashboardEditHRData.sectionHeading03")}</h3>
            </div>
            {addWorkExperience && (
              <div className="addhrinfo_workexperience_content">
                <FormControl style={inputStylesB}>
                  <TextField
                    id="companyTitle"
                    name="companyTitle"
                    type="text"
                    label={t("dashboardEditHRData.formDesc16")}
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
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        company: e.target.value,
                      })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">Company</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        company: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    label={t("dashboardEditHRData.formDesc17")}
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
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        jobTitle: e.target.value,
                      })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">Job Title</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        jobTitle: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="from"
                    name="from"
                    type="date"
                    label={t("dashboardEditHRData.formDesc18")}
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
                    onChange={(e) =>
                      setEmployeeData({ ...employeeData, from: e.target.value })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">From</InputLabel>
                  <Input
                    type="date"
                    onChange={(e) =>
                      setEmployeeData({ ...employeeData, from: e.target.value })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesB}>
                  <TextField
                    id="to"
                    name="to"
                    type="date"
                    label={t("dashboardEditHRData.formDesc19")}
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
                    onChange={(e) =>
                      setEmployeeData({ ...employeeData, to: e.target.value })
                    }
                  />
                  {/* <InputLabel htmlFor="my-input">To</InputLabel>
                  <Input
                    type="date"
                    onChange={(e) =>
                      setEmployeeData({ ...employeeData, to: e.target.value })
                    }
                  /> */}
                </FormControl>
              </div>
            )}
            <button className="add-btn" onClick={handleAddWorkExperience}>
              {t("dashboardEditHRData.sectionHeadingButton02")}{" "}
            </button>

            <div className="hr-save-btn">
              <button
                onClick={() => {
                  console.log(employeeData);
                  history.push({
                    pathname: "/dashboard/employeedata/adddocuments",
                    state: { employeeData },
                  });
                }}
              >
                {t("dashboardEditHRData.formButton01")}
              </button>
            </div>
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default AddHrInfo;
