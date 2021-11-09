const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");

//get all Employees
router.get("/allemployee/", employeesController.getAllEmployees);

// add new Employee
router.post("/addemployee", employeesController.addNewEmployee);

// search for employee
router.post("/search", employeesController.searchName);

// get one employee by name
// router.get("/:firstName", employeesController.getOneEmployee);

// get one employee by email
// router.post("/singleemployee", employeesController.getOneEmployee);

// update employee
router.put("/update/", employeesController.updateEmployee);

// delete employee
// router.delete("/:id", employeesController.deleteOneEmployee);

// updating status ||deleting from the get all employees
router.patch("/delete", employeesController.deleteOrUpdateStatus);

module.exports = router;
