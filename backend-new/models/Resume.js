const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://userone:userone@ictakfiles.cpy6i.mongodb.net/LIBRARY?retryWrites=true&w=majority"
// );

const ResumeSchema = new mongoose.Schema({
  ID: String,
  name: String,
  email: String,
  phonenumber: Number,
  dob: String,
  gender: String,
  address: String,
  about: String,
  photo: String,
  video: String,
  education: Array,
  job: Array,
  skills: Array,
  achievements: String,
  languages: Array,
});
module.exports = mongoose.model("Resume", ResumeSchema);
