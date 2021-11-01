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

      <FormGroup>
        <Typography variant="h4">Hr Information</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Contract No</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Hire date</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Contract End</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Probation Period</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Employment Type</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Position</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Team</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Department</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Salary</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Overtime</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Work Location</InputLabel>
          <Input />
        </FormControl>

        <FormControl>
          <Button>Add </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default AddHrInfo;
