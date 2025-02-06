const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    maxLength: [30, "First name cannot exceed 30 characters"],
    minLength: [2, "First name should be at least 2 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    maxLength: [30, "Last name cannot exceed 30 characters"],
    minLength: [2, "Last name should be at least 2 characters long"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  country: {
    type: String,
    required: [true, "Please enter your country"],
  },
  province: {
    type: String,
    required: [true, "Please enter your province/state"],
  },
  city: {
    type: String,
    required: [true, "Please enter your city"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  zipCode: {
    type: String,
    required: [true, "Please enter your ZIP/postal code"],
  },
  agreement: {
    type: Boolean,
    required: [true, "You must agree to the terms and conditions"],
  },
  subscriptionPlan: {
    type: String,
    required: [true, "Please select a subscription plan"],
  },
  subscriptionRate: {
    type: Number,
    required: [true, "Please enter the subscription rate"],
    min: [0, "Subscription rate cannot be negative"],
  },
  subscriptionRefund: {
    type: Number,
    required: [true, "Please enter the subscription rate"],
    min: [0, "Subscription rate cannot be negative"],
  },
  subscriptionTotal: {
    type: Number,
    required: [true, "Please enter the subscription rate"],
    min: [0, "Subscription rate cannot be negative"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
