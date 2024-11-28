const { Schema, model } = require("mongoose");

const eventLogoSchema = Schema({
  imageLink: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: 1
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const EventLogo = model("eventLogo", eventLogoSchema);

module.exports = EventLogo;