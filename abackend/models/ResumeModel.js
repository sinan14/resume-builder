const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please tell us your name']
  },
  email: {
    type: String,
    required: [true, 'please tell us your email']
  },
  phonenumber: {
    type: String,
    required: [true, 'please tell us your phonenumber ']
  },
  dob: {
    type: String,
    required: [true, 'please tell us your date of birth']
  },
  gender: {
    type: String,
    required: [true, 'please tell us your gender']
  },
  address: {
    type: String,
    required: [true, 'please tell us your address']
  },
  education: {
    type: Array,
    required: [true, 'please gives details about education']
  },
  job: {
    type: Array,
    required: [true, 'please gives details about your job']
  },
  skills: {
    type: Array,
    required: [true, 'please provide skills']
  },
  achievements: {
    type: String,
    required: [true, 'please prvide acheivements']
  },
  languages: {
    type: Array,
    required: [true, 'please provide languages ']
  },
  about: {
    type: String
  },
  photo: {
    type: String,
    default: 'default.jpg'
  },
  video: {
    type: String
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  createdAt: {
    type: Date,
    select: false
  },
  updatedAt: {
    type: Date
  }
});
resumeSchema.pre('save', function(next) {
  const time = Date.now();
  if (!this.createdAt) {
    this.createdAt = time;
  }
  this.updatedAt = time;
  next();
});
module.exports = mongoose.model('Resume', resumeSchema);
