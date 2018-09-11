const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Review = new Schema({
  content: String,
  ratingNum: Number,
  recommend: String
});

const Ball = new Schema({
  make: String,
  model: String,
  image: Number,
  description: String,
  reviews: [Review]
});

module.exports = {
  Ball: mongoose.model("Ball", Ball),
  Review: mongoose.model("Review", Review)
};
