const { validationResult } = require("express-validator");

const validationMiddleware = (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({
      errors: errors.array(),
    });
  } else {
    res.status(200).send("Form updated successfully... ");
  }
  next();
};

module.exports = validationMiddleware;
