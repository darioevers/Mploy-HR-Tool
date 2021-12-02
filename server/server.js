const express = require("express");
const app = express();
const consola = require("consola");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
//const users = require("./models/employeesModel");
const multer=require("multer");
const path=require("path");

// Applications Middlewares
app.use(morgan("dev"));
app.use(express.json());
dotenv.config();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Heroku :All javascript and css will be served from this folder
app.use(express.static("client/build"));





// Connect with the database

let PORT = process.env.PORT || 5000;
const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    consola.success("Database Connection Succeeded ...");

    app.listen(PORT, () => consola.success(`Server started on port ${PORT}`));
  } catch (err) {
    consola.error(`Unable to start the server \n${err.message}`);
  }
};
main();

// routes
//heroku:  all html file from this route index.html
app.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../client","build","index.html"))
})
app.use("/users", require("./routes/users"));

app.use("/dashboard", require("./routes/dashboard"));

app.use("/employee", require("./routes/employees"));

app.use("/announcements", require("./routes/announcements"));

app.use("/tasks", require("./routes/tasks"));

app.use("/leaves", require("./routes/leaves"));

module.exports = app;
