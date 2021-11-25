import react, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";

const useStyles = makeStyles({});

function EmployeeData({ history }) {
  const classes = useStyles();
  const [employees, setEmployees] = useState();
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    getAllEmployee();
  }, []);

  // fetching all data from backend
  const getAllEmployee = () => {
    axios
      .get(
        "http://localhost:5000/employee/allemployee",

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((data) => {
        console.log(data.data);
        setEmployees(data.data);
      })
      .catch((err) => console.log(err));
  };
  // searching query search with firstName
  const searchEmployee = (query) => {
    const data = { query };
    console.log(data);
    setSearch(query);
    axios
      .post("http://localhost:5000/employee/search", data, {
        header: {
          "Content-Type": "application/json",
        },
      })

      .then((data) => setEmployees(data.data))
      .catch((err) => console.log(err));
  };

  // Deleting or changing the employee status to inactive
  const deleteEmployeeData = (x) => {
    const data = { email: x };
    axios
      .patch("http://localhost:5000/employee/delete", data, {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => getAllEmployee())
      .catch((err) => console.log(err));
  };

  return (
    <div className="employeedata_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="employeedata_container">
        <div className="employeedata_header">
          <h1>Employee Data</h1>
        </div>
        {/* search */}
        <div
          className={
            checked
              ? "employeedata_searchbar_show"
              : "employeedata_searchbar_hide"
          }
        >
          <div className="search">
            <span>
              <SearchIcon />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => searchEmployee(e.target.value)}
              placeholder="Type Employee Name"
            />
          </div>

          <div className="button">
            <NavLink
              exact
              to="/dashboard/employeedata/addemployee"
              activeClassName="active"
              className="sidenav_link"
            >
              <button>
                Add Employee <span>+</span>
              </button>
            </NavLink>
          </div>
        </div>

        <div className={checked ? "employeedata_show" : "employeedata_hide"}>
          <Table style={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Date of Birth</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {employees &&
                employees.map((employee) => (
                  <div>
                    <TableRow
                      key={employee._id}
                      onClick={() => {
                        setChecked(true);
                        setId(employee._id);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell style={{ display: "flex" }}>
                        <img
                          src={`http://localhost:5000/${employee.bio.photo}`}
                          onError={(e) => {
                            e.target.onError = null;
                            e.target.src =
                              "http://localhost:5000/uploads/error.jpg";
                          }}
                        />
                        <div className="table_cell_photo">
                          <h5>
                            {employee.bio.firstName} {employee.bio.lastName}{" "}
                          </h5>
                          {/* <h4>{employee.contractInfo.position}</h4> */}
                        </div>
                      </TableCell>

                      {/* <TableCell>{employee.contractInfo.department}</TableCell> */}
                      <TableCell>{employee.bio.dateOfBirth}</TableCell>
                      <TableCell>{employee.bio.email}</TableCell>
                    </TableRow>

                    {checked && employee._id === id && (
                      <div
                        className={
                          checked
                            ? "employeedata_summary_show"
                            : "employeedata_summary_hide"
                        }
                        style={{
                          backgroundColor: "whitesmoke",
                        }}
                      >
                        <div className="summary_header">
                          <div className="summary_header_photo">
                            <img
                              src={`http://localhost:5000/${employee.bio.photo}`}
                              onError={(e) => {
                                e.target.onError = null;
                                e.target.src =
                                  "http://localhost:5000/uploads/error.jpg";
                              }}
                            />
                          </div>
                          <div className="summary_header_title">
                            <h1>
                              {employee.bio.lasttName} {employee.bio.lastName}
                            </h1>
                            <h2>{employee.bio}</h2>
                          </div>
                          <div className="summary_close_btn">
                            <CloseIcon onClick={() => setChecked(!checked)} />
                          </div>
                        </div>

                        <div className="summary_body">
                          <h1> Contact Information </h1>
                          <div className="summary_body_contact">
                            <div className="contact_left">
                              <h5>Contact No.:</h5>
                              <h5>Email:</h5>
                            </div>
                            <div className="contact_right">
                              <h5>{employee.bio.phoneNumber}</h5>
                              <h5>{employee.bio.email}</h5>
                            </div>
                          </div>

                          <h1> Work Information </h1>
                          <div className="summary_body_workinfo">
                            <div className="workinfo_left">
                              <h5>Department:</h5>
                              <h5>Supervisor:</h5>
                              <h5>Office:</h5>
                            </div>
                            <div className="workinfo_right">
                              {/* <h5>{employee.contractInfo.department}</h5>
                              <h5>{employee.contractInfo.supervisor}</h5>
                              <h5>{employee.contractInfo.workLocation}</h5> */}
                            </div>
                          </div>

                          <h1> Personal Info </h1>
                          <div className="summary_body_personalinfo">
                            <div className="personalinfo_left">
                              <h5>Gender:</h5>
                              <h5>Birthday:</h5>
                              <h5>Address:</h5>
                            </div>
                            <div className="personalinfo_right">
                              <h5>{employee.bio.gender}</h5>
                              <h5>{employee.bio.dateOfBirth}</h5>
                              {/* <h5>
                                {employee.addressOne.stateOne},{" "}
                                {employee.addressOne.countryOne}
                              </h5> */}
                            </div>
                          </div>

                          <div className="summary_buttons">
                            <Button
                              variant="contained"
                              onClick={() => {
                                console.log(employees);
                                history.push({
                                  pathname:
                                    "/dashboard/employeedata/editemployee",
                                  state: { employee },
                                });
                              }}
                            >
                              Edit
                            </Button>

                            <Button
                              variant="contained"
                              onClick={() =>
                                deleteEmployeeData(employee.bio.email)
                              }
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default EmployeeData;
