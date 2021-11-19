const EmployeeData = require("../models/employeesModel");
const employeeController = {};

// Get all employees
employeeController.getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeData.find({
      "bio.status": "active",
    });

    res.status(200).json(employees);
    // console.log(employees);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

// //get
// leaveController.getLeaves = async (name, res) => {
//   try {
//     const leaves = await LeavesData.find({name: name})
//     .populate('leaves')
//     res.status(200).json(leaves);
//   } catch (error) {
//     res.status(error.status).json({
//       message: error.message,
//     });
//   }
// };

// add new Employee
employeeController.addNewEmployee = async (req, res) => {
  const received = JSON.parse(req.body.employeeData);
  const path = req.file.path.substring(7);
  try {
    const employee = await new EmployeeData({
      bio: {
        firstName: received.firstName,
        lastName: received.lastName,
        email: received.email,
        dateOfBirth: received.dateOfBirth,
        nationality: received.nationality,
        gender: received.gender,
        phoneNumber: received.phoneNumber,
        maritalStatus: received.maritalStatus,
        status: received.status,
        photo: path,
      },
      addressOne: {
        streetOne: received.streetOne,
        cityOne: received.cityOne,
        postalCodeOne: received.postalCodeOne,
        stateOne: received.stateOne,
        countryOne: received.countryOne,
      },
      addressTwo: {
        streetTwo: received.streetTwo,
        cityTwo: received.cityTwo,
        postalCodeTwo: received.postalCodeTwo,
        stateTwo: received.stateTwo,
        countryTwo: received.countryTwo,
      },
      education: {
        school: received.school,
        endDate: received.endDate,
        degree: received.degree,
        specialization: received.specialization,
      },

      workExperience: {
        company: received.company,
        jobTitle: received.jobTitle,
        from: received.from,
        to: received.to,
      },

      contractInfo: {
        contractNo: received.contractNo,
        hireDate: received.hireDate,
        contractEnd: received.contractEnd,
        probationPeriod: received.probationPeriod,
        employmentType: received.employmentType,
        team: received.team,
        department: received.department,
        salary: received.salary,
        overtime: received.overtime,
        workLocation: received.workLocation,
      },
      // leave: {
      //   typeOfLeave: received.typeOfLeave,
      //   dateFrom: received.dateFrom,
      //   dateTo: received.dateTo,
      //   pending: true,
      //   totalSickLeave: received.totalSickLeave,
      //   totalHolidays: received.totalHolidays,
      //   totalHomeOffice: received.totalHomeOffice,
      // },
    });

    employee.save();
    res
      .status(200)
      .json({ status: "success", message: "The record has been entered" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

// upload
// employeeController.singleFileUpload = async (req, res, next) => {
//     try{
//       console.log(req.file)

//       console.log(received)
//       res.status(201).send('File Uploaded Successfully');
//     }catch(error) {
//         res.status(400).send(error.message);
//     }
// }

// employee search
employeeController.searchName = async (req, res) => {
  // let searchPattern = new RegEx("^" + req.body.query);
  // EmployeeData.find({ firstName: { $regex: searchPattern } })
  try {
    const empArr = await EmployeeData.find({ "bio.status": "active" });
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
// employeeController.getOneEmployee = async (req, res) => {
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
employeeController.updateEmployee = async (req, res) => {
  try {
    console.log(req.body);
    const employee = await EmployeeData.findOneAndUpdate(
      { "bio.email": req.body.editEmp.bio.email },
      req.body.editEmp,
      {
        new: true,
      }
    );
    res.status(200).json({ status: "success", data: employee });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

// delete one employee upon criteria from the log
employeeController.deleteOneEmployee = async (req, res) => {
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
employeeController.deleteOrUpdateStatus = async (req, res) => {
  try {
    const employee = await EmployeeData.findOneAndUpdate(
      { "bio.email": req.body.email },

      { $set: { "bio.status": "inactive" } }
    );
    res.status(200).send({ message: "Successfully updated!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = employeeController;
