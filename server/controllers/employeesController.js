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
// employeeContoller.addNewEmployee = async (req, res) => {
//   try {
//     console.log(req.body);
//     const employee = new EmployeeData({
//       bio: {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         age: req.body.age,
//         nationality: req.body.nationality,
//         gender: req.body.gender,
//         phoneNumber: req.body.phoneNumber,
//         bloodGroup: req.body.bloodGroup,
//         maritalStatus: req.body.maritalStatus,
//         photo: req.body.photo,
//       },
//       addressOne: {
//         street: req.body.streetOne,
//         city: req.body.city,
//         postalCode: req.body.postalCode,
//         state: req.body.state,
//         country: req.body.country,
//       },
//       addressTwo: {
//         street: req.body.streetTwo,
//         city: req.body.city,
//         postalCode: req.body.postalCode,
//         state: req.body.state,
//         country: req.body.country,
//       },
//       education: {
//         school: req.body.school,
//         startDate: req.body.startDate,
//         endDate: req.body.endDate,
//         degree: req.body.degree,
//         specialization: req.body.specialization,
//       },
//       contractInfo: {
//         contractNo: req.body.contractNo,
//         hireDate: req.body.hireDate,
//         contractEnd: req.body.contractEnd,
//         probationPeriod: req.body.probationPeriod,
//         employmentType: req.body.employmentType,
//         position: req.body.position,
//         team: req.body.team,
//         department: req.body.department,
//         salary: req.body.salary,
//         overtime: req.body.overtime,
//         workLocation: req.body.workLocation,
//       },
//       leave: {
//         usedLeave: req.body.usedLeave,
//         remainingLeave: req.body.remainingLeave,
//         fromDate: req.body.fromDate,
//         toDate: req.body.toDate,
//         totalDays: req.body.totalDays,
//         emergencyContact: req.body.emergencyContact,
//       },
//     });

//     const newEmployee = await employee.save();
//     res.status(201).json({
//       message: "New Employee successfully added ✅",
//       newEmployee,
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

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
