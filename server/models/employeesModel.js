const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployeesSchema = Schema({
  bio: {
    firstName: {
      type: String,
      required: true,
      minlength: 5,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
    PhoneNumber: {
      type: String,
      required: true,
    },
    height: {
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
      required: true,
    },
    city: {
      type: String,
      required: true,
      minlength: 5,
    },
    postalCode: {
      type: String,
    },
    state: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
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
    startDate: {
      type: Date,
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
  contractInfo: {
    contractNo: {
      type: String,
      required: true,
    },
    hireDate: {
      type: Date,
      required: true,
    },
    contractEnd: {
      type: Date,
      required: true,
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
      required: true,
    },
    remainingLeave: {
      type: String,
      required: true,
    },
    fromDate: {
      type: Date,
      required: true,
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
    team: {
      type: String,
      required: false,
    },
    department: {
      type: String,
      required: false,
    },
  },
});

const Employees = mongoose.model("employees", EmployeesSchema);

module.exports = Employees;
