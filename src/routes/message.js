const express = require("express");
const router = express.Router();
const emailController = require("../controller/email.controller");

router.get("/", (req, res) => {
  res.send({ statusCode: req.statusCode, message: "Hello" });
});
router.get("/messages", emailController.emailRead);
router.post("/create-message", emailController.emailPost);

module.exports = router;
