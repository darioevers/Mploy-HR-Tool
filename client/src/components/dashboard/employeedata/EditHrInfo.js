import React, { useState, useEffect } from "react";
import axios from "axios";

// COMPONENT IMPORTS
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";

// MUI IMPORTS
import { FormGroup, FormControl, InputLabel, Input } from "@material-ui/core";
import TextField from '@mui/material/TextField';

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

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      {/* personal edit data */}

      <div className="editemployee_wrapper">
        <h1> Edit Employee </h1>
        <div className="addemployee_header">
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/editemployee/${editHrInfo._id}`
              );
            }}
          >
            <h4>General Data</h4>
          </div>
          <div className="active_tab">
            <h4> HR Information </h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/editdocuments/${editHrInfo._id}`
              );
            }}
          >
            <h4>Documents</h4>
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
                <h3>CONTRACT DETAILS </h3>
              </div>

              <div className="edithrinfo_contractdetails_content">
                <FormControl style={inputStylesA}>
                  <TextField
                    id="contractNumber"
                    name="contractNumber"
                    type="text"
                    label="Contract Number"
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
                    label="Hire Date"
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
                    label="Contract End"
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
                    label="Probation Period"
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
                    label="Employment type"
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
                    label="Team"
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
                    label="Department"
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
                    label="Supervisor"
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
                    label="Net salary p.a."
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
                    label="Overtime hrs"
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
                    label="Office Location"
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
                <h3>EDUCATION HISTORY</h3>
              </div>

              {addEducation && (
                <div clasName="edithrinfo_education_content">
                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">School Name</InputLabel>
                    <Input
                      value={editHrInfo?.education?.school}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          school: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">Degree</InputLabel>
                    <Input
                      value={editHrInfo?.education?.degree}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          degree: e.target.value,
                        })
                      }
                    />
                  </FormControl>

                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">Field Of Study</InputLabel>
                    <Input
                      value={editHrInfo?.education?.specialization}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          specialization: e.target.value,
                        })
                      }
                    />
                  </FormControl>

                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">
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
                    />
                  </FormControl>
                </div>
              )}
              <button className="add-btn" onClick={handleAddEducation}>
                Add Education +{" "}
              </button>

              <div className="edithrinfo_workexperience_header">
                <h3>WORK EXPERIENCE</h3>
              </div>
              {addWorkExperience && (
                <div className="edithrinfo_workexperience_content">
                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">Company</InputLabel>
                    <Input
                      value={editHrInfo?.workExperience?.company}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          company: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">Job Title</InputLabel>
                    <Input
                      value={editHrInfo?.workExperience?.jobTitle}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          jobTitle: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">From</InputLabel>
                    <Input
                      type="date"
                      value={editHrInfo?.workExperience?.from}
                      onChange={(e) =>
                        setEditHrInfo({
                          ...editHrInfo,
                          from: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl style={inputStylesB}>
                    <InputLabel htmlFor="my-input">To</InputLabel>
                    <Input
                      type="date"
                      value={editHrInfo?.workExperience?.to}
                      onChange={(e) =>
                        setEditHrInfo({ ...editHrInfo, to: e.target.value })
                      }
                    />
                  </FormControl>
                </div>
              )}
              <button className="add-btn" onClick={handleAddWorkExperience}>
                Add Experience +{" "}
              </button>
            </div>

            <div className="hr-save-btn">
              <button
                onClick={() => {
                  console.log(editHrInfo);
                  edit();
                  // history.push(
                  //   `/dashboard/employeedata/editdocuments/${editHrInfo._id}`
                  // );
                }}
              >
                Next
              </button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EditHrInfo;
