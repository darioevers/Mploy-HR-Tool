const mongoose = require("mongoose");
const { hash, compare } = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

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
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
    },
    otherEmail: {
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
      default: "active",
      enum: ["active", "inactive"],
    },
    photo: {
      type: String,
    },
    hobbies: {
      type: String,
      required: false,
    },

    cv: {
      type: String,
      // required: [true, "Please upload your CV! "],
    },
    certificate: {
      type: String,
      // required: [true, "Please upload your certificate! "],
    },
    diploma: {
      type: String,
      // required: [true, "Please upload your diploma! "],
    },
    letter: {
      type: String,
      // required: [true, "Please upload your employment letter! "],
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

    resetPasswordToken: {
      type: String,
      required: false,
    },
    resetPasswordExpire: {
      type: Date,
      required: false,
    },
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
      type: String,
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
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
  },
  contractInfo: {
    contractNo: {
      type: String,
      required: false,
    },
    hireDate: {
      type: String,
      required: false,
    },
    contractEnd: {
      type: String,
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
    supervisor: {
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
  availableHolidays: {
    type: Number,
    default: 30,
    required: false,
  },
  availableHomeOffice: {
    type: Number,
    default: 30,
    required: false,
  },
  takenHolidays: {
    type: Number,
    required: false,
  },
  takenHomeOffice: {
    type: Number,
    required: false,
  },
  takenSickLeave: {
    type: Number,
    required: false,
  },
});

// using a hook inside the function to cash
EmployeesSchema.pre("save", async function (next) {
  let user = this.bio;
  if (!user.password) return next();
  if (!user.isModified("bio.password")) return next();
  user.password = await hash(user.password, 10);

  next();
});
// // methods compare passwords
EmployeesSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.bio.password);
};
// jwt
EmployeesSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// create reset password hash added to the object saving
EmployeesSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  // this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};

const Employees = mongoose.model("employees", EmployeesSchema);

module.exports = Employees;
