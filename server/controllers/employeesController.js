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
  const employee = new EmployeeData({
    bio: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      nationality: req.body.nationality,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      bloodGroup: req.body.bloodGroup,
      maritalStatus: req.body.maritalStatus,
      photo: req.body.maritalStatus,
    },
    addressOne: {
      street: req.body.street,
      city: req.body.city,
      postalCode: req.body.postalCode,
      state: req.body.state,
      country: req.body.country,
    },
    addressTwo: {
      street: req.body.street,
      city: req.body.city,
      postalCode: req.body.postalCode,
      state: req.body.state,
      country: req.body.country,
    },
    education: {
      school: req.body.school,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      degree: req.body.degree,
      specialization: req.body.specialization,
    },
    contractInfo: {
      contractNo: req.body.contractNo,
      hireDate: req.body.hireDate,
      contractEnd: req.body.contractEnd,
      probationPeriod: req.body.probationPeriod,
      employmentType: req.body.employmentType,
      position: req.body.position,
      team: req.body.team,
      department: req.body.department,
      salary: req.body.salary,
      overtime: req.body.overtime,
      workLocation: req.body.workLocation,
    },
    leave: {
      usedLeave: req.body.usedLeave,
      remainingLeave: req.body.remainingLeave,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      totalDays: req.body.totalDays,
      emergencyContact: req.body.emergencyContact,
    },
  });
  try {
    const newEmployee = await employee.save();
    res.status(201).json({
      message: "New user added ✅",
      newEmployee,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = employeeContoller;
