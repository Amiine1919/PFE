const mongoose = require("mongoose");

const jobAdSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = JobAd = mongoose.model("jobAd", jobAdSchema);
