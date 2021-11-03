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

  const addNew = () => {
    const data = employeeData;
    console.log(employeeData);
    console.log(location.state.employee);
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
        history.push("/dashboard/employeedata/addemployee/documents");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <FormGroup>
        <Typography variant="h4">Hr Information</Typography>
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

        <FormControl>
          <Button onClick={addNew}>Add </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default AddHrInfo;
