exports.emailPost = [
  (req, res) => {
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
  },
];

exports.emailRead = [
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
