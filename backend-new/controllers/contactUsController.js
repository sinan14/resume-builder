const ContactUs = require("../models/contactUs");
const factory = require("../controllers/handlerFactory");

exports.getAllContactUs = factory.getAll(ContactUs);
exports.createContactUs = factory.createOne(ContactUs);
