const EmployeeData = require("../models/employeesModel");

const employeeContoller = {};

// Get all employees

employeeContoller.getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeData.find();
    res.status(200).json(employees);
    console.log(employees);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

// add new Employee
employeeContoller.addNewEmployee = async (req, res) => {
  try {
    const employee = await new EmployeeData({
      bio: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        nationality: req.body.nationality,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        maritalStatus: req.body.maritalStatus,
        photo: req.body.photo,
      },
      addressOne: {
        streetOne: req.body.streetOne,
        cityOne: req.body.cityOne,
        postalCodeOne: req.body.postalCodeOne,
        stateOne: req.body.stateOne,
        countryOne: req.body.countryOne,
      },
      addressTwo: {
        streetTwo: req.body.streetTwo,
        cityTwo: req.body.cityTwo,
        postalCodeTwo: req.body.postalCodeTwo,
        stateTwo: req.body.stateTwo,
        countryTwo: req.body.countryTwo,
      },
      education: {
        school: req.body.school,
        endDate: req.body.endDate,
        degree: req.body.degree,
        specialization: req.body.specialization,
      },

      workExperience: {
        company: req.body.company,
        jobTitle: req.body.jobTitle,
        from: req.body.from,
        to: req.body.to,
      },

      contractInfo: {
        contractNo: req.body.contractNo,
        hireDate: req.body.hireDate,
        contractEnd: req.body.contractEnd,
        probationPeriod: req.body.probationPeriod,
        employmentType: req.body.employmentType,
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

    employee.save();
    res
      .status(200)
      .json({ status: "success", message: "The record has been entered" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

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
