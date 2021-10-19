//in case I want to add the custom error handling in my code
const ErrorResponse = require("../functions/errorResponse");

const ErrorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  console.log(err);

  // duplicate error key
  if (err.code === 11000) {
    const message = `Duplicate Field Value Enter`;
    error = new ErrorResponse(message, 400);
  }
  // validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};

module.exports = ErrorHandler;
