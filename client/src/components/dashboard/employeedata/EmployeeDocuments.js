import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import { NavLink } from "react-router-dom";
import { Document, Page } from "react-pdf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import axios from "axios";

const EmployeeDocuments = ({ history, match }) => {
  const [documents, setDocuments] = useState();

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

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="documents_wrapper">
        <NavLink
          exact
          to="/dashboard/employeedata/"
          activeClassName="active"
          className="sidenav_link"
        >
          <div className="back-arrow">
            <i>
              <ArrowBackIcon />
            </i>
            <p> Back</p>
          </div>
        </NavLink>

        <div className="documents_header">
          <h1> Employee Info </h1>
        </div>
        <div className="documents_subheader">
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(
                `/dashboard/employeedata/employeeinfo/${documents?._id}`
              );
            }}
          >
            <h4>General Data</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push(`/dashboard/employeedata/hrinfo/${documents?._id}`);
            }}
          >
            <h4>HR Information</h4>
          </div>
          <div className="active_tab">
            <h4>Documents</h4>
          </div>
        </div>

        <div className="documents_form">
          <div className="documents_photo">
            <div className="photo">
              <div className="dummy_photo">
                <img
                  src={`http://localhost:5000/${documents?.bio?.photo}`}
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src = "http://localhost:5000/uploads/error.jpg";
                  }}
                />
              </div>
            </div>
          </div>

          <div className="documents_cv">
            <Document
              file={`http://localhost:5000/${documents?.bio?.cv}`}
            ></Document>
            <div className="documents_label">
              <p>Upload Date </p>
              <p>01-12-2021</p>
            </div>
          </div>

          <div className="documents_certificate">
            <Document
              file={`http://localhost:5000/${documents?.bio?.certificate}`}
            ></Document>
            <div className="documents_label">
              <p>Upload Date </p>
              <p>01-12-2021</p>
            </div>
          </div>

          <div className="documents_diploma">
            <Document
              file={`http://localhost:5000/${documents?.bio?.diploma}`}
            ></Document>
            <div className="documents_label">
              <p>Upload Date </p>
              <p>01-12-2021</p>
            </div>
          </div>

          <div className="documents_letter">
            <Document
              file={`http://localhost:5000/${documents?.bio?.diploma}`}
            ></Document>
            <div className="documents_label">
              <p>Upload Date </p>
              <p>01-12-2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDocuments;
