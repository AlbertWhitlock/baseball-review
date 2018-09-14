const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Review = new Schema({
  content: String,
  ratingNum: Number,
  recommend: String
});

const Items = new Schema(
  {
    item: String,
    make: String,
    model: String,
    image: String,
    description: String,
    reviews: [Review]
  },
  { collection: "baseball" }
);

module.exports = {
  Items: mongoose.model("Items", Items),
  Review: mongoose.model("Review", Review)
};
