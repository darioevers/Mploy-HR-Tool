const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LeavesSchema = Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  dateFrom: {
    type: String,
    required: false,
  },
  dateTo: {
    type: String,
    required: false,
  },
  pending: {
    type: Boolean,
    default: true,
    required: false,
  },
  totalSickLeaves: {
    type: String,
    required: false,
  },
  totalHolidays: {
    type: String,
    required: false,
  },
  totalHomeOffice: {
    type: String,
    required: false,
  },

});

const Leaves = mongoose.model("leaves", LeavesSchema);

module.exports = Leaves;
