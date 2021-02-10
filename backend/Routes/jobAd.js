const express = require("express");
const {
  addJobAd,
  getJobAds,
  deleteJobAd,
  editJobAd,
} = require("../controllers/jobAd.controller");

const { addJobAdRules, validator } = require("../middleware/validator");

const Router = express.Router();

Router.post(`/addJobAd`, addJobAdRules(), validator, addJobAd);
Router.get(`/jobAds`, getJobAds);
Router.delete("/deleteJobAd/:id", deleteJobAd);
Router.post("/editJobAd/:id", editJobAd);

module.exports = Router;
