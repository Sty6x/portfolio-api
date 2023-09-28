require("dotenv").config();
const express = require("express");
const app = express();
const port = 7000;
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// all messages
// create messages
// delete messages

// need to connect frontend and backend

// every router requires a JWT except for the user post route
console.log({ email: process.env.ADMIN, password: process.env.ADMIN_PASSWORD });
jwt.sign(
  { email: process.env.ADMIN, password: process.env.ADMIN_PASSWORD },
  process.env.PRIVATE_KEY,
  (err, token) => {
    console.log(token);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/messages", verifyToken, (req, res) => {
  res.json({
    statusCode: res.statusCode,
    message: "retrieves all of the messages ",
  });
});

function verifyToken(req, res, next) {
  const headerBearer = req.headers["authorization"];
  console.log(headerBearer);
  if (headerBearer == null) {
    res.send("Forbidden");
  }
  console.log("nice");
  next();
}

// http method for frontend
app.post("/create-message", (req, res) => {
  console.log({
    statusCode: res.statusCode,
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  res.send({
    statusCode: res.statusCode,
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
});

app.delete("/messages/:messageId", (req, res) => {
  res.json({ statusCode: res.statusCode, message: "Delete employer message" });
});

app.get("/messages/:messageId", (req, res) => {
  res.json({ statusCode: res.statusCode, message: "Retrieved a message" });
});

app.listen(port, () => {
  console.log("Listening to: " + port);
});
