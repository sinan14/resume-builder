const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'please tellus your first name']
  },

  lname: {
    type: String,
    required: [true, 'please tellus your last name']
  },
  email: {
    type: String,
    required: [true, 'please provide email to reach you']
  },
  comment: {
    type: String,
    required: [true, 'please provide your suggestion or query']
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

module.exports = mongoose.model('ContactUs', contactUsSchema);
