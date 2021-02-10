const mongoose = require("mongoose");

const config = require("config");

const mongoUri = config.get("mongoUri");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("The database is connected... ");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
