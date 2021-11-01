import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import axios from "axios";
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

const EditEmployee = () => {
  const [firstName, setFirstName] = useState();
  const edit = () => {
    axios
      .patch(
        "http://localhost:5000/employee/edit",
        { setFirstName },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input
            value={firstName}
            name="firstname"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Button onClick={edit}>Add </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default EditEmployee;
