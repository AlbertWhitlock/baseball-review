const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Review = new Schema({
  content: String,
  ratingNum: Number,
  recommend: String
});

const Items = new Schema({
  make: String,
  model: String,
  image: String,
  description: String,
  details: String,
  reviews: [Review]
});

module.exports = {
  Items: mongoose.model("Items", Items),
  Review: mongoose.model("Review", Review)
};
