const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");
const {uploads}=require("../functions/uploads")

//get all Employees
router.get("/allemployee/", employeesController.getAllEmployees);

// add new Employee
router.post("/addemployee", employeesController.addNewEmployee);

// file upload 
// router.post("/addemployee",uploads.single("file"), employeesController.addNewEmployee);

// search for employee
router.post("/search", employeesController.searchName);


// update employee
router.put("/update/", employeesController.updateEmployee);

// updating status ||deleting from the get all employees
router.patch("/delete", employeesController.deleteOrUpdateStatus);

// get one employee by name
// router.get("/:firstName", employeesController.getOneEmployee);

// get one employee by email
// router.post("/singleemployee", employeesController.getOneEmployee);

// delete employee
// router.delete("/:id", employeesController.deleteOneEmployee);
module.exports = router;
