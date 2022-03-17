const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/getlink', userController.getMe, userController.sendResumeLink);
router.get('/', userController.getAllUsers);
router.put('/user/rate', userController.updateMe);

router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);
router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;

// app.post("/getlink", verifyToken, function (req, res) {
//   console.log(req.body);
//   var id = req.body.accountid;
//   var cvid = req.body.id;
//   var temp = req.body.temp;

//   Userdata.findById({ _id: id }).then((data) => {
//     var link = `http://localhost:4200/${temp}/${cvid}`;
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "mailfromResumeBuilder@gmail.com",
//         pass: "xeknaduiwqpnudgm",
//       },
//     });

//     const mailOptions = {
//       from: "mailfromResumeBuilder@gmail.com",
//       to: data.email,
//       subject: "sending mail",
//       text: `Thanks For Using ResumeBuilder your cv link is ${link}`,
//     };

//     transporter.sendMail(mailOptions, function (err, info) {
//       if (err) console.log(err);
//       else console.log(info);
//     });
//   });
// });

// old

// app.post("/signup", function (req, res) {
//   var userData = req.body;
//   Userdata.findOne({ email: userData.email })
//     .then(function (data) {
//       if (data.email == userData.email) {
//         res.send({ boolean: false, alert: "Email Already Found" });
//       } else {
//         var data = {
//           username: userData.username,
//           email: userData.email,
//           password: userData.password,
//           phonenumber: userData.mobileno,
//           star: userData.star,
//         };
//         var data = Userdata(data);
//         data.save();

//         sendmail();
//         function sendmail() {
//           var transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//               user: "mailfromResumeBuilder@gmail.com",
//               pass: "xeknaduiwqpnudgm",
//             },
//           });

//           const mailOptions = {
//             from: "mailfromResumeBuilder@gmail.com",
//             to: userData.email,
//             subject: "sending mail",
//             text: `Thanks For Using ResumeBuilder your Password is ${userData.password} `,
//           };

//           transporter.sendMail(mailOptions, function (err, info) {
//             if (err) console.log(err);
//             else console.log(info);
//           });
//         }
//         res.send({
//           boolean: true,
//           alert: "Account Created..Password Send To Mail",
//           nav: "login",
//         });
//       }
//     })
//     .catch(() => {
//       var data = {
//         username: userData.username,
//         email: userData.email,
//         password: userData.password,
//         phonenumber: userData.mobileno,
//         star: userData.star,
//       };
//       var data = Userdata(data);
//       data.save();

//       sendmail();
//       function sendmail() {
//         var transporter = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: "mailfromResumeBuilder@gmail.com",
//             pass: "xeknaduiwqpnudgm",
//           },
//         });

//         const mailOptions = {
//           from: "mailfromResumeBuilder@gmail.com",
//           to: userData.email,
//           subject: "sending mail",
//           text: `Thanks For Using ResumeBuilder your Password is ${userData.password} `,
//         };

//         transporter.sendMail(mailOptions, function (err, info) {
//           if (err) console.log(err);
//           else console.log(info);
//         });
//       }
//       res.send({
//         boolean: true,
//         alert: "Account Created..Password Send To Mail",
//         nav: "login",
//       });
//     });
// });

// app.post("/login", function (req, res) {
//   console.log(req.body);
//   var userData = req.body;
//   if (username == userData.username && password == userData.password) {
//     var navigation = "admin";
//     let payload = { subject: username + password };
//     let token = jwt.sign(payload, "secretKey");
//     res.send({ boolean: true, token, nav: navigation, ID: "Admin" });
//     console.log({ boolean: true, token, nav: navigation });
//   } else {
//     Userdata.findOne({ email: userData.username })
//       .then(function (data) {
//         var x = data.password;
//         if (x == userData.password) {
//           var UserId = data._id;
//           var navigation = "user";
//           let payload = { subject: username + password };
//           let token = jwt.sign(payload, "secretKey");
//           res.send({ boolean: true, token, nav: navigation, ID: UserId });
//           console.log({ boolean: true, token, nav: navigation, ID: UserId });
//         } else {
//           res.send({ boolean: false, data: "Password Wrong" });
//         }
//       })
//       .catch(function () {
//         res.send({ boolean: false, data: "Email Not Found" });
//       });
//   }
// });

// app.put("/user/rate", (req, res) => {
//   id = req.body.ID;
//   star = req.body.value;
//   Userdata.findByIdAndUpdate({ _id: id }, { $set: { star: star } }).then(
//     function () {
//       res.send();
//     }
//   );
// });
