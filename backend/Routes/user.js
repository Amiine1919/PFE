const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controllers/user.controller");
const {
  registerRules,
  loginRules,
  validator,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");

const Router = express.Router();

Router.post(`/register`, registerRules(), validator, register);
Router.post(`/login`, loginRules(), validator, login);
Router.get(`/users`, getAllUsers);
Router.get(`/current`, isAuth(), (req, res) => res.json(req.user));

module.exports = Router;
