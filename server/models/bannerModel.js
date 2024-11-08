const { Schema, model } = require("mongoose");

const bannerSchema = Schema({
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

const Banner = model("Banner", bannerSchema);

module.exports = Banner;
