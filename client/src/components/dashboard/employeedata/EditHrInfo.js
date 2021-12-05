import React, { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

// MUI IMPORTS
import { FormGroup, FormControl, InputLabel, Input, Typography } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from "@material-ui/core/Button";

const EditHrInfo = ({ history, match }) => {
  const [editHrInfo, setEditHrInfo] = useState();
  const [file, setFile] = useState();

  const [addEducation, setAddEducation] = useState(false);
  const [addWorkExperience, setAddWorkExperience] = useState(false);

  const handleAddEducation = () => setAddEducation(!addEducation);
  const handleAddWorkExperience = () =>
    setAddWorkExperience(!addWorkExperience);

  //get one employee
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
        setEditHrInfo(data.data);
      })
      .catch((err) => console.log(err));
  };

  const edit = () => {
    const data = new FormData();
    const readyTOSend = JSON.stringify(editHrInfo);
    data.append("editHrInfo", readyTOSend);

    axios
      .put("http://localhost:5000/employee/update", data, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        history.push("/dashboard/employeedata/");
      })
      .catch((err) => console.log(err));
  };

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
            {t("dashboardEditHRData.title01")}
          </Box>
        </Typography>
        <div className="addemployee_header">
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/editemployee/${editHrInfo._id}`
              );
            }}
          >
            <h4>{t("dashboardEditHRData.menu01")}</h4>
          </div>
          <div className="active_tab">
            <h4>{t("dashboardEditHRData.menu02")}</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/editdocuments/${editHrInfo._id}`
              );
            }}
          >
            <h4>{t("dashboardEditHRData.menu02")}</h4>
          </div>
        </div>
        <div className="employeedata_form">
          <FormGroup>
            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Photo</InputLabel>
                <Input
                  type="file"
                  name="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormControl>
            </div>

            <div className="edithrinfo_form">
              <div className="edithrinfo_contractdetails_header">
                <h3>{t("dashboardEditHRData.sectionHeading01")}</h3>
              </div>

              <div className="edithrinfo_contractdetails_content">
                <FormControl style={inputStylesA}>
                  <TextField
                    id="contractNumber"
                    name="contractNumber"
                    type="text"
                    label={t("dashboardEditHRData.formDesc01")}
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
                    value={editHrInfo?.contractInfo?.contractNo}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractNo: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Contract No</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.contractNo}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
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
                        padding: '0 14px',
                      },
                    }}
                    value={editHrInfo?.contractInfo?.hireDate}
                    onChange={(e) => {
                      // setHireDate(e.target.value);
                      setEditHrInfo({
                        ...editHrInfo,
                        hireDate: e.target.value,
                      });
                    }} />
                  {/* <InputLabel htmlFor="my-input">Hire Date</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.hireDate}
                    type="date"
                    onChange={(e) => {
                      // setHireDate(e.target.value);
                      setEditHrInfo({
                        ...editHrInfo,
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
                        padding: '0 14px',
                      },
                    }}
                    value={editHrInfo?.contractInfo?.contractEnd}
                    min="2019-01-01"
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractEnd: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Contract End</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.contractEnd}
                    type="date"
                    min="2019-01-01"
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractEnd: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="probationTime"
                    name="probationTime"
                    label={t("dashboardEditHRData.formDesc04")}
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
                    value={editHrInfo?.contractInfo?.probationPeriod}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        probationPeriod: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Probation Period</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.probationPeriod}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        probationPeriod: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="employmentType"
                    name="employmentType"
                    label={t("dashboardEditHRData.formDesc05")}
                    type="text"
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
                    value={editHrInfo?.contractInfo?.employmentType}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        employmentType: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Employment Type</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.employmentType}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        employmentType: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesA}>
                  <TextField
                    id="team"
                    name="team"
                    label={t("dashboardEditHRData.formDesc06")}
                    type="text"
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
                    value={editHrInfo?.contractInfo?.team}
                    onChange={(e) =>
                      setEditHrInfo({ ...editHrInfo, team: e.target.value })
                    } />
                  {/* <InputLabel htmlFor="my-input">Team</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.team}
                    onChange={(e) =>
                      setEditHrInfo({ ...editHrInfo, team: e.target.value })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="department"
                    name="department"
                    label={t("dashboardEditHRData.formDesc07")}
                    type="text"
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
                    value={editHrInfo?.contractInfo?.department}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        department: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Department</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.department}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        department: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>

                <FormControl style={inputStylesA}>
                  <TextField
                    id="supervisor"
                    name="supervisor"
                    label={t("dashboardEditHRData.formDesc08")}
                    type="text"
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
                    value={editHrInfo?.contractInfo?.supervisor}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        supervisor: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Supervisor</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.supervisor}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        supervisor: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="salary"
                    name="salary"
                    label={t("dashboardEditHRData.formDesc09")}
                    type="text"
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
                    value={editHrInfo?.contractInfo?.salary}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        salary: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Salary</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.salary}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        salary: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="overtime"
                    name="overtime"
                    label={t("dashboardEditHRData.formDesc10")}
                    type="number"
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
                    value={editHrInfo?.contractInfo?.overtime}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        overtime: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Overtime</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.overtime}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        overtime: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
                <FormControl style={inputStylesA}>
                  <TextField
                    id="workLocation"
                    name="workLocation"
                    label={t("dashboardEditHRData.formDesc11")}
                    type="text"
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
                    value={editHrInfo?.contractInfo?.workLocation}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        workLocation: e.target.value,
                      })
                    } />
                  {/* <InputLabel htmlFor="my-input">Work Location</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.workLocation}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        workLocation: e.target.value,
                      })
                    }
                  /> */}
                </FormControl>
              </div>

              <div className="edithrinfo_education_header">
                <h3>{t("dashboardEditHRData.sectionHeading02")}</h3>
              </div>

              {addEducation && (
                <div clasName="edithrinfo_education_content">
                  <FormControl style={inputStylesB}>
                    <TextField
                      id="universityName"
                      name="universityName"
                      label={t("dashboardEditHRData.formDesc12")}
                      type="text"
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
                      value={editHrInfo?.education?.school}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          school: e.target.value,
                        })
                      } />
                    {/* <InputLabel htmlFor="my-input">School Name</InputLabel>
                    <Input
                      value={editHrInfo?.education?.school}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          school: e.target.value,
                        })
                      }
                    /> */}
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <TextField
                      id="degree"
                      name="degree"
                      label={t("dashboardEditHRData.formDesc13")}
                      type="text"
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
                      value={editHrInfo?.education?.degree}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          degree: e.target.value,
                        })
                      } />
                    {/* <InputLabel htmlFor="my-input">Degree</InputLabel>
                    <Input
                      value={editHrInfo?.education?.degree}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          degree: e.target.value,
                        })
                      }
                    /> */}
                  </FormControl>

                  <FormControl style={inputStylesB}>
                    <TextField
                      id="fieldOfStudy"
                      name="fieldOfStudy"
                      label={t("dashboardEditHRData.formDesc14")}
                      type="text"
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
                      value={editHrInfo?.education?.specialization}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          specialization: e.target.value,
                        })
                      } />
                    {/* <InputLabel htmlFor="my-input">Field Of Study</InputLabel>
                    <Input
                      value={editHrInfo?.education?.specialization}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          specialization: e.target.value,
                        })
                      }
                    /> */}
                  </FormControl>

                  <FormControl style={inputStylesB}>
                    <TextField
                      id="yearOfCompletion"
                      name="yearOfCompletion"
                      label={t("dashboardEditHRData.formDesc15")}
                      type="text"
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
                      value={editHrInfo?.education?.endDate}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          endDate: e.target.value,
                        })
                      } />
                    {/* <InputLabel htmlFor="my-input">
                      Year Of Completion
                    </InputLabel>
                    <Input
                      value={editHrInfo?.education?.endDate}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
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

              <div className="edithrinfo_workexperience_header">
                <h3>{t("dashboardEditHRData.sectionHeading03")}</h3>
              </div>
              {addWorkExperience && (
                <div className="edithrinfo_workexperience_content">
                  <FormControl style={inputStylesB}>
                    <TextField
                      id="company"
                      name="company"
                      label={t("dashboardEditHRData.formDesc16")}
                      type="text"
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
                      value={editHrInfo?.workExperience?.company}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          company: e.target.value,
                        })
                      } />
                    {/* <InputLabel htmlFor="my-input">Company</InputLabel>
                    <Input
                      value={editHrInfo?.workExperience?.company}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          company: e.target.value,
                        })
                      }
                    /> */}
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <TextField
                      id="jobTitle"
                      name="jobTitle"
                      label={t("dashboardEditHRData.formDesc17")}
                      type="text"
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
                      value={editHrInfo?.workExperience?.jobTitle}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          jobTitle: e.target.value,
                        })
                      } />
                    {/* <InputLabel htmlFor="my-input">Job Title</InputLabel>
                    <Input
                      value={editHrInfo?.workExperience?.jobTitle}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          jobTitle: e.target.value,
                        })
                      }
                    /> */}
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <TextField
                      id="jobFrom"
                      name="jobFrom"
                      label={t("dashboardEditHRData.formDesc18")}
                      type="date"
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
                      value={editHrInfo?.workExperience?.from}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          from: e.target.value,
                        })
                      } />
                    {/* <InputLabel htmlFor="my-input">From</InputLabel>
                    <Input
                      type="date"
                      value={editHrInfo?.workExperience?.from}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          from: e.target.value,
                        })
                      }
                    /> */}
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <TextField
                      id="jobTo"
                      name="jobTo"
                      label={t("dashboardEditHRData.formDesc19")}
                      type="date"
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
                      value={editHrInfo?.workExperience?.to}
                      onChange={(e) =>
                        setEditHrInfo({ ...editHrInfo, to: e.target.value })
                      } />
                    {/* <InputLabel htmlFor="my-input">To</InputLabel>
                    <Input
                      type="date"
                      value={editHrInfo?.workExperience?.to}
                      onChange={(e) =>
                        setEditHrInfo({ ...editHrInfo, to: e.target.value })
                      }
                    /> */}
                  </FormControl>
                </div>
              )}
              <button className="add-btn" onClick={handleAddWorkExperience}>
                {t("dashboardEditHRData.sectionHeadingButton02")}{" "}
              </button>
            </div>

            <div className="hr-save-btn">
              <Button
                onClick={() => {
                  console.log(editHrInfo);
                  edit();
                  // history.push(
                  //   `/dashboard/employeedata/editdocuments/${editHrInfo._id}`
                  // );
                }}
              >
                {t("dashboardEditHRData.formButton01")}
              </Button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EditHrInfo;
