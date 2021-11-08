const EmployeeData = require("../models/employeesModel");

const employeeContoller = {};

// Get all employees

employeeContoller.getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeData.find({ "bio.status": "available" });
    res.status(200).json(employees);
    // console.log(employees);
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
        status: req.body.status,
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
// employee search
employeeContoller.searchName = async (req, res) => {
  console.log(req.body);
  // let searchPattern = new RegEx("^" + req.body.query);
  // EmployeeData.find({ firstName: { $regex: searchPattern } })
  try {
    const empArr = await EmployeeData.find();
    // .select("firstName"
    console.log(empArr);
    const empFilter = empArr.filter((item) =>
      item.bio.firstName.toLowerCase().includes(req.body.query)
    );

    console.log(empFilter);
    res.json(empFilter);
  } catch (err) {
    res.send(err);
  }
};

// get single employee using email
// employeeContoller.getOneEmployee = async (req, res) => {
//   try {
//     const employee = await EmployeeData.findOne({"bio.email":req.body.email});
//     res.status(200).json({
//       status: "success",
//       data: employee,
//     });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// patch or update employee
employeeContoller.updateEmployee = async (req, res) => {
  try {
    console.log(req.body);
   const employee= await EmployeeData.findOneAndUpdate(
      {"bio.email":req.body.editEmp.bio.email},
      req.body.editEmp,
      {
        new: true,
      }
    );
    res.status(200).json({ status: "success", data: employee });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message});
  }
};

// employeeContoller.updateEmployee = async (req, res) => {
//   EmployeeData.findById(req.params.id, function (err, employee) {
//     console.log(req.body);
//     if (!employee) res.send("Unable To Find Employee With This Id");
//     else {
//       employee.firstName = req.body.firstName;
//       employee.lastName = req.body.lastName;
//       employee.email = req.body.email;
//       // employee.phone = req.body.phone;

//       employee
//         .save()
//         .then((emp) => {
//           res.json("Employee Updated Successfully");
//         })
//         .catch((err) => {
//           res.status(400).send("Unable To Update Employee");
//         });
//     }
//   });
// };
// delete one employee upon criteria from the log
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
// deleting from the db but actually it change the status from available to unavailable
employeeContoller.deleteOrUpdateStatus = async (req, res) => {
  try {
    const employee = await EmployeeData.findOneAndUpdate(
      {"bio.email":req.body.email},
      
     {$set:{ "bio.status": "unavailable" } }
    );
    res.status(200).send({ message: "Successfully updated!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
//findone creiteria email, const emp
// emp
module.exports = employeeContoller;
