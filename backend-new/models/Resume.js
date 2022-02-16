const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please tellus your name"],
  },
  email: {
    type: String,
    required: [true, "please tellus your email"],
  },
  phonenumber: {
    type: String,
    required: [true, "please tellus your phonenumber "],
  },
  dob: {
    type: String,
    required: [true, "please tellus your date of birth"],
  },
  gender: {
    type: String,
    required: [true, "please tellus your gender"],
  },
  address: {
    type: String,
    required: [true, "please tellus your address"],
  },
  education: {
    type: Array,
    required: [true, "please gives details about education"],
  },
  job: {
    type: Array,
    required: [true, "please gives details about your job"],
  },
  skills: {
    type: Array,
    required: [true, "please provide skills"],
  },
  achievements: {
    type: String,
    required: [true, "please prvide acheivements"],
  },
  languages: {
    type: Array,
    required: [true, "please provide languages "],
  },
  about: {
    type: String,
  },
  photo: {
    type: String,
    required: [true, "please tellus your "],
  },
  video: {
    type: String,
  },
});
module.exports = mongoose.model("Resume", resumeSchema);
