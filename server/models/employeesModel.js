const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployeesSchema = Schema({
  bio: {
    firstName: {
      type: String,
      required: false,
      minlength: 5,
    },
    lastName: {
      type: String,
      required: false,
      minlength: 5,
    },
    email: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
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
    bloodGroup: {
      type: String,
      required: false,
    },
    maritalStatus: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
    },
  },
  addressOne: {
    street: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
      minlength: 5,
    },
    postalCode: {
      type: String,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
  },
  addressTwo: {
    street: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
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
  leave: {
    usedLeave: {
      type: String,
      required: false,
    },
    remainingLeave: {
      type: String,
      required: false,
    },
    fromDate: {
      type: Date,
      required: false,
    },
    toDate: {
      type: Date,
      required: false,
    },
    totalDays: {
      type: String,
      required: false,
    },
    emergencyContact: {
      type: String,
      required: false,
    },
  },
});

const Employees = mongoose.model("employees", EmployeesSchema);

module.exports = Employees;
