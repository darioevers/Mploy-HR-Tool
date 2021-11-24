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

  console.log(req.body);

  const received = JSON.parse(req.body.employeeData);
  const path = req.file && req.file.path.substring(7);



  try {
    const employee = await new EmployeeData({
      bio: {
        firstName: received.firstName,
        lastName: received.lastName,
        email: received.email,
        otherEmail: received.otherEmail,
        dateOfBirth: received.dateOfBirth,
        nationality: received.nationality,
        gender: received.gender,
        phoneNumber: received.phoneNumber,
        maritalStatus: received.maritalStatus,
        status: "active",
        photo: path,
        hobbies: received.hobbies,
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
        position: received.position,
        supervisor: received.supervisor,
        team: received.team,
        department: received.department,
        salary: received.salary,
        overtime: received.overtime,
        workLocation: received.workLocation,
      },
      availableHolidays: 30,
      availableHomeOffice: 30,
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
    let received = await JSON.parse(req.body.editEmp);
    received.bio.photo = "uploads/" + req.file.path.substring(15);
    console.log(req.file.path);
    // received.bio.photo=req.file.path.substring(7);
    console.log(received);
    const employee = await EmployeeData.findOneAndUpdate(
      { "bio.email": received.bio.email },
      received,

      {
        new: true,
      }
    );
    res.status(200).json({ status: "success", data: employee });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};
// qrcode

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


// geting employees who had birthday today
employeeContoller.getTodaysBirthDay = async (req, res) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const today = month + "-" + day;
  try {
    const allEmployees = await EmployeeData.find();
    // console.log("this is emp" +allEmployees);

    const  currentBdays=allEmployees.filter(item=>item.bio.dateOfBirth.includes(today));

    console.log("this is current bdays"+currentBdays);

    res.status(200).json(currentBdays);
    // console.log(employees);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};



module.exports = employeeContoller;

