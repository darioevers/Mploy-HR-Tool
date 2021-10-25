const EmployeeData = require("../models/employeesModel");

const employeeContoller = {};

// Get all employees

employeeContoller.getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeData.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

// add new Employee
employeeContoller.addNewEmployee = async (req, res) => {
  try {
    const newEmployee = await EmployeeData.create(req.body);
    res.status(200).json({ status: "success", data: newEmployee });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

// get one employee by name

// employeeContoller.getOneEmployee = async (req, res, next) => {
//   try {
//     let employee = await EmployeeData.findOne({ firstName: req.params.name });
//     if (employee == null) {
//       return res.status(404).json({ message: "Sorry,employee not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: err.message });
//   }
//   res.employee = employee;
//   next();
// };

// get single employee using id
employeeContoller.getOneEmployeeById = async (req, res) => {
  try {
    const employee = await EmployeeData.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: employee,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// patch or update employee
employeeContoller.updateEmployee = async (req, res) => {
  try {
    const employee = await EmployeeData.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ status: "success", data: employee });
  } catch (error) {
    res.status(404).json({ status: "fail", message: message.error });
  }
};

// delete one employee upon criteria
employeeContoller.deleteOneEmployee = async (req, res) => {
  try {
    await EmployeeData.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "Employee successfuly deleted!", data: null });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
module.exports = employeeContoller;
