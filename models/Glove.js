const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Review = new Schema({
  content: String,
  ratingNum: Number,
  recommend: String
});

const Glove = new Schema({
  make: String,
  model: String,
  image: Number,
  description: String,
  details: String,
  reviews: [Review]
});

module.exports = {
  Glove: mongoose.model("Glove", Glove),
  Review: mongoose.model("Review", Review)
};
