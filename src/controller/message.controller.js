const MessageSchema = require("../model/message.model");
const jwt = require("jsonwebtoken");

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
    } catch (err) {
      res.send({
        statusCode: 502,
        message: "Unable to send your message at this time.",
      });
      throw err;
    }
    res.send({
      statusCode: res.statusCode,
      message: "Message sent successfully!",
    });
  },
];

exports.messageGet = [
  (req, res, next) => {
    const headerBearer = req.headers["authorization"];
    const accessToken = headerBearer.split(" ")[1];
    console.log({ token: headerBearer });
    if (headerBearer == null) {
      res.sendStatus(401);
    }
    jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
    console.log("nice");
    next();
  },
  (req, res) => {
    console.log(req.user);
    res.json({
      statusCode: res.statusCode,
      message: "retrieves all of the messages ",
    });
  },
];
