require("dotenv").config();
const express = require("express");
const app = express();
const port = 7000;
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// routes
const messageRoute = require("./routes/message");

// init mongoose
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// every router requires a JWT except for the user post route
console.log({ email: process.env.ADMIN, password: process.env.ADMIN_PASSWORD });
jwt.sign(
  { email: process.env.ADMIN, password: process.env.ADMIN_PASSWORD },
  process.env.SECRET_KEY,
  (err, token) => {
    console.log(token);
  }
);

app.get("/", (req, res) => {
  res.redirect("/api/v1/");
});
app.use("/api/v1", messageRoute);

app.listen(port, () => {
  console.log("Listening to: " + port);
});
