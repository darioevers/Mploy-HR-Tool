const express = require("express");
const app = express();
const consola = require("consola");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./models/UserModel");
// const ErrorHandler = require("./middlewares/error");

// Applications Middlewares
app.use(morgan("dev"));
app.use(express.json());
dotenv.config();
app.use(cors());
// app.use(ErrorHandler);
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
app.use("/users", require("./routes/users"));

app.use("/private", require("./routes/private"));

module.exports = app;
