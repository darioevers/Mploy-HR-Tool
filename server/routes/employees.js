const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

const employeesController = require("../controllers/employeesController");

const { uploadMultiple } = require("../functions/uploads");

//get all Employees
router.get("/allemployee/", employeesController.getAllEmployees);

//get employee by id
router.get("/singleEmployee/:id", employeesController.getOneEmployee);

// add new Employee
router.post("/addemployee", uploadMultiple, employeesController.addNewEmployee);

// search for employee
router.post("/search", employeesController.searchName);

// update employee
router.put("/update", employeesController.updateEmployee);

// updating status ||deleting from the get all employees
router.patch("/delete", employeesController.deleteOrUpdateStatus);


module.exports = router;
