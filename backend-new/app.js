const express = require("express");

const cors = require("cors");
var jwt = require("jsonwebtoken");
var bodyparser = require("body-parser");
const app = new express();
var multer = require("multer");
var nodemailer = require("nodemailer");
var xxa = "";
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Frontend/src/assets");
  },
  filename: function (req, file, cb) {
    xxa = file.originalname;
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.use(cors());
app.use(bodyparser.json());
const username = "admin@gmail.com";
const password = "12345678";

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

const port = process.env.PORT || 3000;

app.get("/loaddraftdata/:id", (req, res) => {
  id = req.params.id;
  Draftdata.find({ ID: id }).then((data) => {
    res.send(data);
    console.log(data);
  });
});

app.post("/messageback", function (req, res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mailfromResumeBuilder@gmail.com",
      pass: "xeknaduiwqpnudgm",
    },
  });

  const mailOptions = {
    from: "mailfromResumeBuilder@gmail.com",
    to: req.body.email,
    subject: "sending mail",
    text: req.body.mess,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
});

app.listen(port, function () {
  console.log("Server Ready at " + port);
});
