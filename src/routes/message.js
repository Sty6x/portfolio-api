const express = require("express");
const router = express.Router();
const emailController = require("../controller/message.controller");

router.get("/", (req, res) => {
  res.send({ statusCode: res.statusCode, message: "Hello" });
});
router.get("/messages", emailController.messageGet);

router.post("/create-message", emailController.messagePost);

// app.delete("/messages/:messageId", (req, res) => {
//   res.json({ statusCode: res.statusCode, message: "Delete employer message" });
// });

// app.get("/messages/:messageId", (req, res) => {
//   res.json({ statusCode: res.statusCode, message: "Retrieved a message" });
// });
module.exports = router;
