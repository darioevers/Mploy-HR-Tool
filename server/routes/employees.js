const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");

//get all Employees
router.get("/allemployee", employeesController.getAllEmployees);

// add new Employee ?
router.post("/addemployee", employeesController.addNewEmployee);

// get one employee by name
// router.get("/:firstName", employeesController.getOneEmployee);

// get one employee by id
router.get("/:id", employeesController.getOneEmployeeById);

// update employee
router.patch("/:id", employeesController.updateEmployee);

// delete employee
router.delete("/:id", employeesController.deleteOneEmployee);

module.exports = router;
