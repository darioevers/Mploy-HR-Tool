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

function EmployeeData() {
  const classes = useStyles();
  const [employees, setEmployees] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    getAllEmployee();
  }, []);
  // fetching data from backend
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

      .then((data) => setEmployees(data.data))
      .catch((err) => console.log(err));
  };
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

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Marital Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees &&
            employees.map((employee) => (
              <TableRow key={employee._id}>
                <TableCell>{employee.bio.firstName}</TableCell>

                <TableCell>{employee.bio.lastName}</TableCell>
                <TableCell>{employee.bio.email}</TableCell>

                <TableCell>{employee.bio.dateOfBirth}</TableCell>
                <TableCell>{employee.bio.nationality}</TableCell>
                <TableCell>{employee.bio.gender}</TableCell>
                <TableCell>{employee.bio.phoneNumber}</TableCell>
                <TableCell>{employee.bio.maritalStatus}</TableCell>

                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    component={Link}
                    to={`/dashboard/employeedata/editemployee/`}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    component={Link}
                    to={`/dashboard/employeedata/employeedata/`}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <NavLink
        exact
        to="/dashboard/employeedata/addemployee"
        activeClassName="active"
        className="sidenav_link"
      >
        <button>Add Employee</button>
      </NavLink>

      <NavLink
        exact
        to="/dashboard/employeedata/editemployee"
        activeClassName="active"
        className="sidenav_link"
      >
        Edit employeee
      </NavLink>
    </div>
  );
}
export default EmployeeData;
