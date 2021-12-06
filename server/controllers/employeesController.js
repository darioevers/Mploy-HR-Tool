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

//get one employee by id
employeeController.getOneEmployee = async (req, res) => {
  console.log(req.params.id);
  try {
    const employee = await EmployeeData.findById(req.params.id);

    res.status(200).json(employee);
    // console.log(employees);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};


// add new Employee

employeeController.addNewEmployee = async (req, res) => {
  console.log("data", req.body);

  const received = JSON.parse(req.body.allData);
  const pathProfilePic = req.files?.file[0]?.path.substring(7);
  const pathCv = req.files?.fileCv[0]?.path.substring(7);
  const pathDiploma = req.files?.fileDiploma[0]?.path.substring(7);
  const pathCertificate = req.files?.fileCertificate[0]?.path.substring(7);
  const pathLetter = req.files?.fileLetter[0]?.path.substring(7);

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
        role: received.role,
        hobbies: received.hobbies,
        photo: pathProfilePic,
        cv: pathCv,
        certificate: pathCertificate,
        diploma: pathDiploma,
        letter: pathLetter,
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
  
  try {
    const empArr = await EmployeeData.find({ "bio.status": "active" });
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

// patch or update employee
employeeController.updateEmployee = async (req, res) => {
  try {
    let received = await JSON.parse(req.body.editHrInfo);
    console.log(req);
    console.log("after", received);
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
