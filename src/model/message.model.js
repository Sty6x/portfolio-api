const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  fullname: String,
  email: String,
  subject: String,
  message: String,
});

module.exports = mongoose.model("emails", MessageSchema);
