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

// // ** MIDDLEWARE ** for preventing the cors issue 
// const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'here the heroku link after deployment']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }





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


// --> Add this to deploy in heroku
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.use("/users", require("./routes/users"));

app.use("/dashboard", require("./routes/dashboard"));

app.use("/employee", require("./routes/employees"));

app.use("/announcements", require("./routes/announcements"));

app.use("/tasks", require("./routes/tasks"));

app.use("/leaves", require("./routes/leaves"));

module.exports = app;
