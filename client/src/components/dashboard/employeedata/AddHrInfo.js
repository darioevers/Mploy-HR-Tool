import React from "react";
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

const AddHrInfo = () => {
  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      {/* <FormGroup>
        <Typography variant="h4">Hr Information</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Contract No</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, contractNo: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Hire date</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, hireDate: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Contract End</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, contractEnd: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Probation Period</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, probationPeriod: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Employment Type</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, employmentType: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Position</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, position: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Team</InputLabel>
          <Input
            onChange={(e) => setEmployee({ ...employee, team: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Department</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Salary</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Overtime</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, overtime: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Work Location</InputLabel>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, workLocation: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <Button onClick={employee}>Add </Button>
        </FormControl>
      </FormGroup> */}
    </div>
  );
};

export default AddHrInfo;
