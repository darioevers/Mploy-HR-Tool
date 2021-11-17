import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const AddHrInfo = ({ location, history }) => {
  const [employeeData, setEmployeeData] = useState(
    location.state && location.state.employee
  );
  const [file, setFile] = useState();

  const addNew = () => {
    const data = new FormData();
    data.append("file", file);
    const readyTOSend = JSON.stringify(employeeData);
    data.append("employeeData", readyTOSend);

    axios
      .post(
        "http://localhost:5000/employee/addemployee",
        data,

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // history.push("/dashboard/employeedata/addemployee/documents");
      })
      .catch((err) => console.log(err));

    setEmployeeData("");
  };

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <FormGroup>
        <Typography variant="h4">Hr Information</Typography>
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

        <FormControl>
          <InputLabel htmlFor="my-input">Contract No</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, contractNo: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Hire date</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, hireDate: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Contract End</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, contractEnd: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
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
        <FormControl>
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
        <FormControl>
          <InputLabel htmlFor="my-input">Position</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, position: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Team</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, team: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Department</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, department: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Salary</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, salary: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Overtime</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, overtime: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Work Location</InputLabel>
          <Input
            onChange={(e) =>
              setEmployeeData({ ...employeeData, workLocation: e.target.value })
            }
          />
        </FormControl>

        {/* --education--- */}
        <div>
          <Typography variant="h6">Education</Typography>

          <FormControl>
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
          <FormControl>
            <InputLabel htmlFor="my-input">Degree</InputLabel>
            <Input
              onChange={(e) =>
                setEmployeeData({ ...employeeData, degree: e.target.value })
              }
            />
          </FormControl>

          <FormControl>
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

          <FormControl>
            <InputLabel htmlFor="my-input">Year Of Completion</InputLabel>
            <Input
              onChange={(e) =>
                setEmployeeData({ ...employeeData, endDate: e.target.value })
              }
            />
          </FormControl>
        </div>

        {/* experience */}
        <div>
          <Typography variant="h6">Work Experience</Typography>

          <FormControl>
            <InputLabel htmlFor="my-input">Company</InputLabel>
            <Input
              onChange={(e) =>
                setEmployeeData({ ...employeeData, company: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Job Title</InputLabel>
            <Input
              onChange={(e) =>
                setEmployeeData({ ...employeeData, jobTitle: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">From</InputLabel>
            <Input
              onChange={(e) =>
                setEmployeeData({ ...employeeData, from: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">To</InputLabel>
            <Input
              onChange={(e) =>
                setEmployeeData({ ...employeeData, to: e.target.value })
              }
            />
          </FormControl>
        </div>

        <FormControl>
          <Button onClick={addNew}>Add </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default AddHrInfo;
