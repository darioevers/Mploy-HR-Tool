import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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

  //edit info

  const edit = () => {
    const data = new FormData();
    data.append("file", file);
    const readyTOSend = JSON.stringify(editHrInfo);
    data.append("editHrInfo", readyTOSend);

    console.log(editHrInfo);
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
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/addemployee/documents"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              Documents
            </NavLink>
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
                  <InputLabel htmlFor="my-input">Contract No</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.contractNo}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        contractNo: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Hire Date</InputLabel>
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
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Contract End</InputLabel>
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
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Probation Period</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.probationPeriod}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        probationPeriod: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Employment Type</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.employmentType}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        employmentType: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Team</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.team}
                    onChange={(e) =>
                      setEditHrInfo({ ...editHrInfo, team: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Department</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.department}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        department: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Supervisor</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.supervisor}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        supervisor: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Salary</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.salary}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        salary: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Overtime</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.overtime}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        overtime: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesA}>
                  <InputLabel htmlFor="my-input">Work Location</InputLabel>
                  <Input
                    value={editHrInfo?.contractInfo?.workLocation}
                    onChange={(e) =>
                      setEditHrInfo({
                        ...editHrInfo,
                        workLocation: e.target.value,
                      })
                    }
                  />
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
              <button onClick={edit}>Save and Update Employee Data</button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EditHrInfo;
