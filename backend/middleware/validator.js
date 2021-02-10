const { check, validationResult } = require("express-validator");

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};

exports.registerRules = () => [
  check(`name`, `This field is required!`).notEmpty(),
  check(`email`, `This field is required!`).isEmail(),
  check(`email`, `This field is required!`).notEmpty(),
  check(`password`, `This field should be at least 4 caracters!`).isLength({
    min: 4,
  }),
];

exports.loginRules = () => [
  check(`email`, `Please enter a valid email`).isEmail(),
  check(`email`, `This field is required!`).notEmpty(),
];

exports.addJobAdRules = () => [
  check(`title`, `This field is required!`).notEmpty(),
  check(`salary`, `This field is required!`).notEmpty(),
  check(`description`, `This field is required!`).notEmpty(),
];
