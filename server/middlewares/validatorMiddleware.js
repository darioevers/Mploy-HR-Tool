const { validationResult } = require("express-validator");

const validationMiddleware = (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({
      errors: errors.array(),
    });
  }
  next();
};

module.exports = validationMiddleware;
