const express = require("express");
const app = express();
const port = 7000;
const cors = require("cors");

// all messages
// create messages
// delete messages

app.use(cors());
app.get("/messages", (req, res) => {
  res.json({
    statusCode: res.statusCode,
    message: "retrieves all of the messages ",
  });
});

app.post("/author/create-message", (req, res) => {
  res.json({ statusCode: res.statusCode, message: "Created a new message" });
});

app.delete("/author/:id/messages/:message", (req, res) => {
  res.json({ statusCode: res.statusCode, message: "Delete employer message" });
});

app.delete("/author/:id", (req, res) => {
  res.json({ statusCode: res.statusCode, message: "Delete employer" });
});

app.get("/author/:id/messages", (req, res) => {
  res.json({
    statusCode: res.statusCode,
    message: "Retrieved specific employer messages",
  });
});

app.listen(port, () => {
  console.log("Listening to: " + port);
});
