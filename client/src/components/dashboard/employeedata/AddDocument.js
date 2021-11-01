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

const AddDocument = () => {
  return (
    <div className="addemployee_mainbox">
      <h3> add documents</h3>
      <DashboardTopNav />
      <DashboardSideNav />
    </div>
  );
};

export default AddDocument;
