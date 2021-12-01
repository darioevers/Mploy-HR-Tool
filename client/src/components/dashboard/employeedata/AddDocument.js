import React, { useState } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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

const AddDocument = ({ location }) => {
  const [allData, setAllData] = useState(
    location.state && location.state.employeeData
  );

  const [file, setFile] = useState();
  const [fileCv, setFileCv] = useState();
  const [fileDiploma, setFileDiploma] = useState();
  const [fileLetter, setFileLetter] = useState();
  const [fileCetificate, setFileCetificate] = useState();

  const addNew = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("fileCv", fileCv);
    data.append("fileDiploma", fileDiploma);
    data.append("fileLetter", fileLetter);
    data.append("fileCetificate", fileCetificate);
    console.log(data);

    const readyTOSend = JSON.stringify(allData);
    data.append("allData", readyTOSend);
    console.log(data);
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
  };

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
          <div className="inactive_tab">
            <NavLink
              exact
              to="/dashboard/employeedata/addemployee/hrinfo"
              activeClassName="active"
              className="sidenav_link"
            >
              {" "}
              HR Information
            </NavLink>
          </div>
          <div className="active_tab">
            <h4>Documents</h4>
          </div>
        </div>

        <FormGroup>
          <div>
            <div className="form_header_photo">
              <div className="photo">
                <div className="dummy_photo">
                  <i>
                    <AccountCircleIcon style={{ fontSize: "135" }} />
                  </i>
                </div>
                <div className="upload-photo">
                  <label for="upload-photo">Upload Photo +</label>
                  <input type="file" name="file" id="upload-photo" />
                </div>
              </div>
            </div>
            {/* cv */}
            <FormControl></FormControl>
            {/* Diploma */}
            <FormControl>
              <InputLabel htmlFor="my-input">Diploma</InputLabel>
              <Input type="file" name="fileDiploma" />
            </FormControl>
            {/* letter */}
            <FormControl>
              <InputLabel htmlFor="my-input">Letter</InputLabel>
              <Input type="file" name="fileLetter" />
            </FormControl>
            {/* certificate */}
            <FormControl>
              <InputLabel htmlFor="my-input">Certificate</InputLabel>
              <Input type="file" name="fileCetificate" />
            </FormControl>
            {/* certificate */}
            <FormControl>
              <InputLabel htmlFor="my-input">Certificate</InputLabel>
              <Input type="file" name="fileCetificate" />
            </FormControl>
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default AddDocument;

// onClick={() => {
//   addNew();
//   setEmployee("");
// }}
