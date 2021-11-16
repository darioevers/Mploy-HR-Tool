const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TasksSchema = Schema({
  title: {
    type: String,
    required: false,
  },
  dueDate: {
    type: String,
    required: false,
  },
  taskTag: {
    type: String,
    required: false,
  },
});

const Tasks = mongoose.model("tasks", TasksSchema);

module.exports = Tasks;
