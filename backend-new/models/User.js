const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phonenumber: Number,
  star: String,
});

module.exports = mongoose.model("User", UserSchema);
