const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeesSchema = Schema({
  bio: {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    maritalStatus: {
      type: String,
      required: false,
    },

    status: {
      type: String,
    },
    photo: {
      type: String,
    },
    // approved: {
    //   type: Boolean,
    //   default:false,
    // },
  },

  addressOne: {
    streetOne: {
      type: String,
      required: false,
    },
    cityOne: {
      type: String,
      required: false,
    },
    postalCodeOne: {
      type: String,
    },
    stateOne: {
      type: String,
      required: false,
    },
    countryOne: {
      type: String,
      required: false,
    },
  },
  addressTwo: {
    streetTwo: {
      type: String,
      required: false,
    },
    cityTwo: {
      type: String,
      required: false,
    },
    postalCodeTwo: {
      type: String,
      required: false,
    },
    stateTwo: {
      type: String,
      required: false,
    },
    countryTwo: {
      type: String,
      required: false,
    },
  },
  education: {
    school: {
      type: String,
      required: false,
    },

    endDate: {
      type: Date,
      required: false,
    },
    degree: {
      type: String,
      required: false,
    },
    specialization: {
      type: String,
      required: false,
    },
  },
  workExperience: {
    company: {
      type: String,
      required: false,
    },

    jobTitle: {
      type: String,
      required: false,
    },
    from: {
      type: Date,
      required: false,
    },
    to: {
      type: Date,
      required: false,
    },
  },
  contractInfo: {
    contractNo: {
      type: String,
      required: false,
    },
    hireDate: {
      type: Date,
      required: false,
    },
    contractEnd: {
      type: Date,
      required: false,
    },
    probationPeriod: {
      type: String,
      required: false,
    },
    employmentType: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      required: false,
    },
    team: {
      type: String,
      required: false,
    },
    department: {
      type: String,
      required: false,
    },
    salary: {
      type: String,
      required: false,
    },
    overtime: {
      type: String,
      required: false,
    },
    workLocation: {
      type: String,
      required: false,
    },
  },
  leaves: [],
});

const Employees = mongoose.model("employees", EmployeesSchema);

module.exports = Employees;
