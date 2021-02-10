const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const secretOrKey = config.get("secretOrKey");

exports.register = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes)
      return res.status(401).json({ msg: `user already existed !!` });
    const newUser = new User({
      name,
      email,
      password,
      phoneNumber,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (!searchRes) return res.status(404).json({ msg: `User not found!` });
    const isMatch = await bcrypt.compare(password, searchRes.password);
    if (!isMatch)
      return res.status(401).json({ msg: `Email or Password is incorrect!` });
    const payload = {
      name: searchRes.name,
      id: searchRes.id,
      email: searchRes.email,
      phoneNumber: searchRes.phoneNumber,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().select("-password");
    res.status(201).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(400).json({ errors: error });
  }
};
