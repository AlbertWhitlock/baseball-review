const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Review = new Schema({
  content: String,
  ratingNum: Number,
  recommend: String
});

const Helmet = new Schema({
  make: String,
  model: String,
  image: Number,
  description: String,
  reviews: [Review]
});

module.exports = {
  Helmet: mongoose.model("Helmet", Helmet),
  Review: mongoose.model("Review", Review)
};
