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

const EditDocuments = ({ history, match }) => {
  const [documents, setDocuments] = useState();

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
        setDocuments(data.data);
      })
      .catch((err) => console.log(err));
  };

  //edit info

  const edit = () => {
    const data = new FormData();
    const readyTOSend = JSON.stringify(documents);
    data.append("documents", readyTOSend);

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

      <div className="editdocuments_wrapper">
        <h1> Edit Employee </h1>
        <div className="editdocuments_header">
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/editemployee/${documents?._id}`
              );
            }}
          >
            <h4>General Data</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/edithrinfo/${documents?._id}`
              );
            }}
          >
            <h4> HR Information </h4>
          </div>
          <div className="active_tab">
            <h4>Documents</h4>
          </div>
        </div>
        <div className="employeedata_form">
          <div className="hr-save-btn">
            <button
              onClick={() => {
                edit();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDocuments;
