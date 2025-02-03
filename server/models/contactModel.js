const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceeds 30 characters"],
    minLength: [4, "Name should be at least 4 characters long"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, "Please Enter Your Password"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Message should be at least 8 characters long"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
