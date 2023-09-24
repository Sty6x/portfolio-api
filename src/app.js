const express = require("express");
const app = express();
const port = 7000;
const cors = require("cors");
const bodyParser = require("body-parser");

// all messages
// create messages
// delete messages

// need to connect frontend and backend

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/messages", (req, res) => {
  res.json({
    statusCode: res.statusCode,
    message: "retrieves all of the messages ",
  });
});

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
