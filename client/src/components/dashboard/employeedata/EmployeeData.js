import react, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Table,
  TableHead,
  td,
  TableRow,
  TableBody,
  Button,
  makeStyles,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { buttonUnstyledClasses } from "@mui/core";

function EmployeeData({ history }) {
  // const classes = useStyles();
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
    setSearch(query);
    axios
      .post("http://localhost:5000/employee/search", data, {
        header: {
          "Content-Type": "application/json",
        },
      })

      .then((data) => {
        console.log(data);
        setEmployees(data.data);
      })
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
    <>
      {employees && (
        <div className="employeedata_mainbox">
          <DashboardTopNav />
          <DashboardSideNav />

          <div className="employeedata_container">
            <div className="employeedata_header">
              <div className="employeedata_header_title">
                <h1>Employee Data</h1>
              </div>
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

              <div className="employeedata_add_button">
                <NavLink
                  exact
                  to="/dashboard/employeedata/addemployee"
                  activeClassName="active"
                  className="sidenav_link"
                >
                  <div className="addemployee_button">
                    Add Employee <span>+</span>
                  </div>
                </NavLink>
              </div>
            </div>


            <div
              className={checked ? "employeedata_show" : "employeedata_hide"}
            >
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th className="mobile_hide">Date of Birth</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="mobile_hide"></th>
                  </tr>
                </thead>

                <tbody>
                  {employees &&
                    employees.map((employee) => (
                      <>
                        <tr
                          key={employee._id}
                          onClick={() => {
                            setChecked(true);
                            setId(employee._id);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <td>
                            <div className="table_cell">
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
                                  {employee.bio.firstName}{" "}
                                  {employee.bio.lastName}
                                </h5>
                               
                                <h4>{employee.contractInfo?.position}</h4>
                              </div>
                            </div>
                          </td>

                          <td>{employee.contractInfo?.department}</td>

                          <td>{employee.bio.email}</td>
                          <td className="mobile_hide">
                            {employee.bio.dateOfBirth}
                          </td>
                        </tr>


                        {checked && employee._id === id && (
                          <div
                            className={
                              checked
                                ? "employeedata_summary_show"
                                : "employeedata_summary_hide"
                            }
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
                                  {employee.bio.firstName}{" "}
                                  {employee.bio.lastName}
                                </h1>
                                <h2>{employee.contractInfo?.position} </h2>
                              </div>
                              <div className="summary_close_btn">
                                <div onClick={() => setChecked(!checked)}>
                                  <CloseIcon />
                                </div>
                              </div>
                            </div>

                            <div className="summary_body">
                              <h1> Contact Information </h1>
                              <div className="summary_body_contact">
                                <div className="contact_left">
                                  <h5>Phone:</h5>
                                  <h5>Email:</h5>
                                </div>
                                <div className="contact_right">
                                  <h5>
                                    {employee.bio.phoneNumber
                                      ? employee.bio.phoneNumber
                                      : "Not Specified"}
                                  </h5>
                                  <h5>
                                    {employee.bio.email
                                      ? employee.bio.email
                                      : ""}
                                  </h5>
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
                                  <h5>{employee.contractInfo?.department}</h5>
                                  <h5>{employee.contractInfo?.supervisor}</h5>
                                  <h5>{employee.contractInfo?.workLocation}</h5>
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
                                  <h5>
                                    {employee.addressOne?.stateOne},{" "}
                                    {employee.addressOne?.countryOne}
                                  </h5>
                                </div>
                              </div>

                              <div className="summary_buttons">
                                <div
                                  variant="contained"
                                  onClick={() => {
                                    history.push(
                                      `/dashboard/employeedata/editemployee/${employee._id}`
                                    );
                                  }}
                                >
                                  Edit
                                </div>
                           

                                <div
                                  variant="contained"
                                  onClick={() =>
                                    deleteEmployeeData(employee.bio.email)
                                  }
                                >
                                  {" "}
                                  Delete
                                </div>

                                <div
                                  variant="contained"
                                  onClick={() => {
                                    history.push(
                                      `/dashboard/employeedata/employeeinfo/${employee._id}`
                                    );
                                  }}
                                >
                                  <i>
                                    {" "}
                                    <ArrowForwardIosIcon />
                                  </i>
                                </div>
                              </div>

                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default EmployeeData;
