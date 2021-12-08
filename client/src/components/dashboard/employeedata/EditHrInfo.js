import React, { useState, useEffect } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

// COMPONENT IMPORTS
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/NewDashboardSideNav";

// MUI IMPORTS
import {
  FormGroup,
  FormControl,
  Typography,
  InputLabel,
  Input,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";

//ICONS
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const EditHrInfo = ({ history, match, location }) => {
  //ALERT BOX
  const [isShowingAlert, setShowingAlert] = useState(false);

  const [editHrInfo, setEditHrInfo] = useState(
    location.state && location.state.editEmp
  );
  const [file, setFile] = useState();
  const [addEducation, setAddEducation] = useState(false);
  const [addWorkExperience, setAddWorkExperience] = useState(false);

  const handleAddEducation = () => setAddEducation(!addEducation);
  const handleAddWorkExperience = () =>
    setAddWorkExperience(!addWorkExperience);

  //upate user employee data
  const edit = () => {
    const data = new FormData();
    data.append("file", file);
    const readyTOSend = JSON.stringify(editHrInfo);
    data.append("editHrInfo", readyTOSend);

    console.log("editHrInfo", editHrInfo);
    console.log("data", data);

    axios
      .put("http://localhost:5000/employee/update", data, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          history.push("/dashboard/employeedata/");
        }, 1500);
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
  const height = 50;

  // TRANSLATION
  const { t } = useTranslation();

  //image preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    setFile(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      {/* personal edit data */}
      <div className="editemployee_wrapper">
        <Typography variant="h4" gutterBottom>
          <Box sx={{ fontWeight: 500 }}>{t("dashboardEditHRData.title01")}</Box>
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
        </div>
        <div className="employeedata_form">
          <FormGroup>
            <div className="edithrinfo_form">
              <div className="edithrinfo_contractdetails_content">
                <div className="edithrinfo_photo_upload">
                  <div className="edithrinfo_dummy_photo">
                    <img
                      src={`http://localhost:5000/${editHrInfo?.bio?.photo}`}
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src =
                          "http://localhost:5000/uploads/error.jpg";
                      }}
                    />
                  </div>

                  <div className="edithrinfo_upload_photo">
                    <label for="hrinfo_file">Upload New Photo +</label>
                    <input
                      type="file"
                      name="file"
                      id="hrinfo_file"
                      onChange={onSelectFile}
                    />
                    {selectedFile && <img src={preview} />}
                  </div>
                </div>
                <br />
                <div className="edithrinfo_contractdetails_header">
                  <h3>{t("dashboardEditHRData.sectionHeading01")}</h3>
                </div>
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.contractNo}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          contractNo: e.target.value,
                        },
                      })
                    }
                  />
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
                    value={editHrInfo?.contractInfo?.hireDate}
                    onChange={(e) => {
                      setEditHrInfo({
                        ...editHrInfo,
                        hireDate: e.target.value,
                      });
                    }}
                  />
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
                    value={editHrInfo?.contractInfo?.contractEnd}
                    min="2019-01-01"
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractEnd: e.target.value,
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.probationPeriod}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,

                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          probationPeriod: e.target.value,
                        },
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.employmentType}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,

                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          employmentType: e.target.value,
                        },
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.team}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          team: e.target.value,
                        },
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.department}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          department: e.target.value,
                        },
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.supervisor}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,

                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          supervisor: e.target.value,
                        },
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.salary}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,

                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          salary: e.target.value,
                        },
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.overtime}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,

                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          overtime: e.target.value,
                        },
                      })
                    }
                  />
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
                        padding: "0 14px",
                      },
                    }}
                    value={editHrInfo?.contractInfo?.workLocation}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,

                        contractInfo: {
                          ...editHrInfo.contractInfo,
                          workLocation: e.target.value,
                        },
                      })
                    }
                  />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.education?.school}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,

                          education: {
                            ...editHrInfo.education,
                            school: e.target.value,
                          },
                        })
                      }
                    />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.education?.degree}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,

                          education: {
                            ...editHrInfo.education,
                            degree: e.target.value,
                          },
                        })
                      }
                    />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.education?.specialization}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,

                          education: {
                            ...editHrInfo.education,
                            specialization: e.target.value,
                          },
                        })
                      }
                    />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.education?.endDate}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,

                          education: {
                            ...editHrInfo.education,
                            endDate: e.target.value,
                          },
                        })
                      }
                    />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.workExperience?.company}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,

                          workExperience: {
                            ...editHrInfo.workExperience,
                            company: e.target.value,
                          },
                        })
                      }
                    />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.workExperience?.jobTitle}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,

                          workExperience: {
                            ...editHrInfo.workExperience,
                            jobTitle: e.target.value,
                          },
                        })
                      }
                    />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.workExperience?.from}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,

                          workExperience: {
                            ...editHrInfo.workExperience,
                            from: e.target.value,
                          },
                        })
                      }
                    />
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
                          padding: "0 14px",
                        },
                      }}
                      value={editHrInfo?.workExperience?.to}
                      onChange={(e) =>
                        setEditHrInfo({ ...editHrInfo, to: e.target.value })
                      }
                    />
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
                  setShowingAlert(true);
                  edit();
                }}
              >
                {t("dashboardEditHRData.formButton01")}
              </Button>
            </div>
          </FormGroup>
          <div
            className={`alert alert-success ${
              isShowingAlert ? "alert-shown" : "alert-hidden"
            }`}
            onTransitionEnd={() => setShowingAlert(false)}
          >
            <p>Employee Data Updated!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHrInfo;
