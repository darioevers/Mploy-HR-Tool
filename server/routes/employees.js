const express = require("express");
const router = express.Router();
const auth=require("../middlewares/authMiddleware");

const employeesController = require("../controllers/employeesController");

const { uploads } = require("../functions/uploads");



//get all Employees
router.get("/allemployee/",employeesController.getAllEmployees);

// add new Employee

router.post("/addemployee" , uploads.single('file'), employeesController.addNewEmployee);


// search for employee
router.post("/search", employeesController.searchName);

// update employee
router.put("/update/", uploads.single('file'), employeesController.updateEmployee);

// updating status ||deleting from the get all employees
router.patch("/delete", employeesController.deleteOrUpdateStatus);
 

// get employee who has today birthday
router.get("/todaybirthday", employeesController.getTodaysBirthDay);

// get employee who has birthday this month
//2router.get("/thismonthbirthday", employeesController.getThisMonthBirthDay);

// get one employee by name
// router.get("/:firstName", employeesController.getOneEmployee);

// get one employee by email
// router.post("/singleemployee", employeesController.getOneEmployee);

// delete employee
// router.delete("/:id", employeesController.deleteOneEmployee);
module.exports = router;
