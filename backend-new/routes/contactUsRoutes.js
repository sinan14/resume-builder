const express = require("express");
const ContactUsController = require("./../controllers/contactUsController");

const router = express.Router();
router
  .route("/")
  .get(ContactUsController.getAllContactUs)
  .post(ContactUsController.createContactUs);
// "/contactus"
// app.post("/contactus", function (req, res) {
//   const c = Contactdata.create(req.body)
//   console.log(req.body);

//   var contact = {
//     fname: req.body.fname,
//     lname: req.body.lname,
//     email: req.body.email,
//     comment: req.body.comment,
//   };
//   var contact = new Contactdata(contact);
//   contact.save();
// });

// // "/getmessage"
// app.get("/getmessage", function (req, res) {
//   Contactdata.find().then(function (users) {
//     res.send(users);
//   });
// });
