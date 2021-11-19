import react, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import axios from "axios";
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

      {/* search */}
      <FormGroup>
        <FormControl>
          <Input
            type="text"
            value={search}
            onChange={(e) => searchEmployee(e.target.value)}
            placeholder="Search"
          />
        </FormControl>
      </FormGroup>
      <NavLink
        exact
        to="/dashboard/employeedata/addemployee"
        activeClassName="active"
        className="sidenav_link"
      >
        <button>Add Employee</button>
      </NavLink>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>

            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>DOB</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees &&
            employees.map((employee) => (
              <>
                <TableRow
                  key={employee._id}
                  onClick={() => {
                    setChecked(true);
                    setId(employee._id);
                  }}
                >
                  <TableCell>
                    <img
                      src={`http://localhost:5000/${employee.bio.photo}`} onError={(e)=>{e.target.onError=null; e.target.src='http://localhost:5000/uploads/error.jpg'}} />
                     
                  </TableCell>

                  <TableCell>{employee.bio.firstName}</TableCell>
                  <TableCell>{employee.bio.lastName}</TableCell>
                  <TableCell>{employee.bio.email}</TableCell>
                  <TableCell>{employee.bio.dateOfBirth}</TableCell>
                </TableRow>
                {checked && employee._id === id && (
                  <div className="xx" style={{ backgroundColor: "red" }}>
                    <TableCell>{employee.bio.nationality}</TableCell>
                    <TableCell>{employee.bio.gender}</TableCell>
                    <TableCell>{employee.bio.phoneNumber}</TableCell>
                    <TableCell>{employee.bio.maritalStatus}</TableCell>
                    <TableCell>{employee.bio.status}</TableCell>
                    <TableCell>
                      {" "}
                      <h4> Address</h4>{" "}
                      {`${employee.addressOne.streetOne} ${employee.addressOne.cityOne} ${employee.addressOne.postalCodeOne} ${employee.addressOne.countryOne}`}
                    </TableCell>

                    <TableCell>{employee.contractInfo.department}</TableCell>
                    <TableCell>{employee.contractInfo.team}</TableCell>
                    <TableCell>{employee.contractInfo.workLocation}</TableCell>

                    <TableCell>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          console.log(employees);
                          history.push({
                            pathname: "/dashboard/employeedata/editemployee",
                            state: { employee },
                          });
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => deleteEmployeeData(employee.bio.email)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </div>
                )}
              </>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default EmployeeData;
