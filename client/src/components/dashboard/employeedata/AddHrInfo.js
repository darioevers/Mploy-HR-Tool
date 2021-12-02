import React, { useState, useRef } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import axios from "axios";

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
  // hiredate validation
  //   const checkDateValidation=()=> {
  //     // check the dates
  //  if ((new Date(setEmployeeData.hireDate) > new Date(setEmployeeData.contractEnd)) || (new Date(setEmployeeData.contractEnd) < new Date(setEmployeeData.hireDate))){
  //   setHireDate(true);
  //     } else {
  //       null
  //     }
  //   }

  const handleAddEducation = () => setAddEducation(!addEducation);
  const handleAddWorkExperience = () =>
    setAddWorkExperience(!addWorkExperience);

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="addhrinfo_wrapper">
        <h1> Add New Employee </h1>
        <div className="addhrinfo_header">
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/addemployee"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              General Data
            </NavLink>
          </div>
          <div className="active_tab">
            <h4>HR Information</h4>
          </div>
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/adddocuments"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              Documents
            </NavLink>
          </div>
        </div>

        <FormGroup>
          <div className="addhrinfo_form">
            <div className="addhrinfo_contractdetails_header">
              <h3>CONTRACT DETAILS </h3>
            </div>

            <div className="addhrinfo_contractdetails_content">
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Contract No</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      contractNo: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Hire Date</InputLabel>
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
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Contract End</InputLabel>
                <Input
                  type="date"
                  min="2019-01-01"
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      contractEnd: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Probation Period</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      probationPeriod: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Employment Type</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      employmentType: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Team</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({ ...employeeData, team: e.target.value })
                  }
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      department: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Supervisor</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      supervisor: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Salary</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      salary: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Overtime</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      overtime: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl style={inputStylesA}>
                <InputLabel htmlFor="my-input">Work Location</InputLabel>
                <Input
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      workLocation: e.target.value,
                    })
                  }
                />
              </FormControl>
            </div>

            <div className="addhrinfo_education_header">
              <h3>EDUCATION HISTORY</h3>
            </div>

            {addEducation && (
              <div clasName="addhrinfo_education_content">
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">School Name</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        school: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Degree</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        degree: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Field Of Study</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        specialization: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Year Of Completion</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
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

            <div className="addhrinfo_workexperience_header">
              <h3>WORK EXPERIENCE</h3>
            </div>
            {addWorkExperience && (
              <div className="addhrinfo_workexperience_content">
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Company</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        company: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">Job Title</InputLabel>
                  <Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        jobTitle: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">From</InputLabel>
                  <Input
                    type="date"
                    onChange={(e) =>
                      setEmployeeData({ ...employeeData, from: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl style={inputStylesB}>
                  <InputLabel htmlFor="my-input">To</InputLabel>
                  <Input
                    type="date"
                    onChange={(e) =>
                      setEmployeeData({ ...employeeData, to: e.target.value })
                    }
                  />
                </FormControl>
              </div>
            )}
            <button className="add-btn" onClick={handleAddWorkExperience}>
              Add Experience +{" "}
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
                NEXT
              </button>
            </div>
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default AddHrInfo;
