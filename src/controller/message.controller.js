const MessageSchema = require("../model/message.model");

exports.messagePost = [
  async (req, res) => {
    const message = new MessageSchema({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    try {
      await message.save();
      console.log("saved");
    } catch (err) {
      console.log("cant save shit");
    }
    res.send({
      statusCode: res.statusCode,
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
  },
];

exports.messageGet = [
  (req, res, next) => {
    const headerBearer = req.headers["authorization"];
    console.log(headerBearer);
    if (headerBearer == null) {
      res.send("Forbidden");
    }
    console.log("nice");
    next();
  },
  (req, res) => {
    res.json({
      statusCode: res.statusCode,
      message: "retrieves all of the messages ",
    });
  },
];
