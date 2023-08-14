const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Could be different depending on the email service you want to use
    auth: {
      user: "yourEmail@gmail.com", // Your email address
      pass: "yourPassword" // Your email password
    }
  });

  const mailOptions = {
    from: req.body.email, // sender address
    to: "yourEmail@gmail.com", // receivers
    subject: req.body.subject, // subject
    text: req.body.message // message body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
